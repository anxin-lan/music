<template>
  <div class="searchview-top">

    <!-- navbar -->
    <div class="searchview-top-nav">
      <div class="list-left">
        <div @click="$router.go(-1)"><span class="iconfont icon-zuojiantou"></span></div>

      </div>
      <div class="list-right">
        <!-- <span class="iconfont icon-sousuo"></span> -->
        <input type="text" v-model="searchKeyWord" :placeholder="placeholder" @keydown.enter="saveKeyWords">
      </div>
    </div>
    <!-- history -->
    <div class="history">
      <div class="historyLeft">历史</div>
      <div class="historyRight">
        <div class="keyWordItems" @click="historySearch(item)" v-for="(item,index) in keywordList" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- searchContent -->
    <div class="searchSongs" v-show="searchSongs.length !== 0">
      <!-- topnav -->
      <div class="searchSongs-top">
        <div class="searchSongs-top-left">
          <span class="iconfont icon-bofang"></span>
          播放全部
          <div class="searchSongs-num">
            (共{{ searchSongs.length }}首)
          </div>
        </div>

      </div>
      <!-- searchSongs-content -->
      <div class="list">
        <div class="list-item" v-for="(item,index) in searchSongs" :key="index">
          <div class="left">
            <div class="index">{{ index+1 }}</div>
            <div class="container" @click="setPlay(item,index)">
              <div class="song-title">{{ item.name }}</div>
              <div class="song-author">
                {{ item.artists[0].name }}-{{ item.name }}{{ item.alias[0]}}
              </div>
            </div>
          </div>
          <div class="right">
            <span class="iconfont icon-shipin"></span>
            <span class="iconfont icon-diandiandianshu"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchMusic } from '@/api/index.js'
export default {
  data() {
    return {
      placeholder: '陈奕迅',
      keywordList: [],
      searchKeyWord: '',
      searchSongs: []
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    saveKeyWords: async function () {
      this.keywordList.push(this.searchKeyWord)
      this.keywordList = Array.from(new Set(this.keywordList))
      if (this.keywordList.length > 6) {
        this.keywordList = this.keywordList.slice(this.keywordList.length - 6, this.keywordList.length)
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      let result = await SearchMusic(this.searchKeyWord)
      this.searchSongs = result.data.result.songs
      console.log(this.searchSongs)
    },
    historySearch(keyword) {
      this.searchKeyWord = keyword
      this.saveKeyWords()
    },
    setPlay(item, index) {
      item.al = item.album
      item.al.picUrl = item.artists[0].img1v1Url
      console.log(item.artists[0].img1v1Url)
      this.$store.commit('pushPlayList', item)
      this.$store.commit('setPlayIndex', this.$store.state.playlist.length - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchview-top {
  width: 100%;
  height: 6rem;
  // padding: 0 0.2rem;
  .searchview-top-nav {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    padding: 0 0.2rem;
    .list-left,
    .list-right {
      position: relative;
      display: flex;
      align-items: center;
      span {
        padding: 0 0.2rem;
      }
    }
    .iconfont {
      font-size: 0.5rem;
      color: #333;
    }
    .list-right {
      input {
        width: 6.2rem;
        height: 0.8rem;
        border: none;
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 0.4rem;
        outline: none;
        padding-left: 0.2rem;
      }
    }
  }
  .history {
    display: flex;
    // height: 2rem;
    // background-color: pink;
    // overflow: hidden;
    .historyLeft {
      width: 1rem;
      height: 0.8rem;
      line-height: 0.8rem;
      margin: 0 0.2rem;
      font-weight: 700;
    }
    .historyRight {
      display: flex;
      flex-wrap: wrap;
      color: #777;
      flex: 1;
      .keyWordItems {
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.2rem;
        margin: 0.1rem 0.2rem;
        border-radius: 0.3rem;
        background-color: #ededed;
      }
    }
  }

  // searchContent
  .searchSongs {
    width: 100%;
    // border-top-left-radius: 0.3rem;
    // border-top-right-radius: 0.3rem;
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    .searchSongs-top {
      height: 1.5rem;
      // background-color: #e1e1de;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      // border-bottom: 1px solid #999;
      .searchSongs-top-left {
        font-size: 0.35rem;
        .iconfont {
          font-size: 0.45rem;
          padding-right: 0.15rem;
        }
        .searchSongs-num {
          display: inline-block;
          font-size: 0.25rem;
          color: #999;
        }
      }
      .searchSongs-top-right {
        width: 2.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        color: #666;
      }
    }
    .list {
      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 0;
        .left {
          display: flex;
          align-items: center;
          padding-left: 0.4rem;
          color: #666;
          .index {
            width: 0.5rem;
            font-size: 0.35rem;
          }
        }
        .container {
          margin-left: 0.4rem;
          width: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          .song-title {
            font-size: 0.3rem;
            font-weight: 600;
            color: #000;
          }
          .song-author {
            font-size: 0.2rem;
            color: #777;
          }
        }
        .right {
          padding-right: 0.2rem;
          .iconfont {
            padding: 0 0.2rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>