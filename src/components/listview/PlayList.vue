<template>
  <div class="play-list">
    <!-- topnav -->
    <div class="play-list-top">
      <div class="play-list-top-left">
        <span class="iconfont icon-bofang"></span>
        播放全部
        <div class="play-list-num">
          (共{{ playlist.tracks.length }}首)
        </div>
      </div>
      <div class="play-list-top-right">
        +
        收藏
        ({{ changeNum(playlist.subscribedCount) }})
      </div>
    </div>
    <!-- play-list-content -->
    <div class="list">
      <div class="list-item" v-for="(item,index) in playlist.tracks" :key="index">
        <div class="left">
          <div class="index">{{ index+1 }}</div>
          <div class="container" @click="setPlayIndex(index)">
            <div class="song-title">{{ item.al.name }}</div>
            <div class="song-author">
              {{ item.ar[0].name }}-{{ item.al.name }}
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
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['playlist'],
  methods: {
    changeNum(num) {
      let res = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num >= 10000) {
        res = (num / 10000).toFixed(2) + '万'
      } else if (num < 10000) {
        res = num
      }
      return res
    },
    ...mapMutations(['setPlayIndex'])
  }
}
</script>

<style lang="less" scoped>
.play-list {
  width: 100%;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  border-top: 1px solid #999;
  .play-list-top {
    height: 1.5rem;
    // background-color: #e1e1de;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    // border-bottom: 1px solid #999;
    .play-list-top-left {
      font-size: 0.35rem;
      .iconfont {
        font-size: 0.45rem;
        padding-right: 0.15rem;
      }
      .play-list-num {
        display: inline-block;
        font-size: 0.25rem;
        color: #999;
      }
    }
    .play-list-top-right {
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
</style>