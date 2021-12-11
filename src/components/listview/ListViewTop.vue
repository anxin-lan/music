<template>
  <div class="listview-top">
    <!-- navbar -->
    <img class="bg" :src="playlist.coverImgUrl" alt="">
    <div class="listview-top-nav">
      <div class="list-left">
        <div @click="$router.go(-1)"><span class="iconfont icon-zuojiantou"></span></div>
        <span class="song-list">
          歌单
        </span>
        <div class="r"><span class="iconfont icon-trademark"></span></div>
      </div>
      <div class="list-right">
        <span class="iconfont icon-sousuo" @click="$router.push('/search')"></span>
        <span class="iconfont icon-diandiandianshu"></span>
      </div>
    </div>
    <!-- content-->
    <div class="content">
      <div class="content-left">
        <img :src="playlist.coverImgUrl">
        <div class="listview-count">
          <span class="iconfont icon-24gl-play"></span>
          {{ changeNum(playlist.playCount) }}
        </div>
      </div>
      <div class="content-right">
        <h4>{{ playlist.name }}</h4>
        <div class="author">
          <img :src="playlist.creator.avatarUrl">
          <div class="author-name">
            {{ playlist.creator.nickname }}
            <span class="iconfont icon-arrow-right"></span>
          </div>
        </div>
        <div class="description">
          {{ playlist.description }}
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
    </div>
    <!-- iconlist -->
    <div class="icon-list">
      <div class="icon-items">
        <span class="iconfont icon-liaotian"></span>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="icon-items">
        <span class="iconfont icon-dibudaohanglan-"></span>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="icon-items">
        <span class="iconfont icon-iconfontzhizuobiaozhun023146"></span>
        <span>下载</span>
      </div>
      <div class="icon-items">
        <span class="iconfont icon-duoxuankuang"></span>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
  methods: {
    changeNum(num) {
      let res = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num >= 10000) {
        res = (num / 10000).toFixed(2) + '万'
      }
      return res
    }
  }
}
</script>

<style lang="less" scoped>
.listview-top {
  width: 100%;
  height: 6rem;
  padding: 0 0.2rem;
  // background-color: pink;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    z-index: -1;
    filter: blur(30px);
  }
  .listview-top-nav {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    // background-color: red;
    .list-left,
    .list-right {
      position: relative;
      display: flex;
      align-items: center;
      .song-list {
        font-size: 0.35rem;
        font-weight: 500;
        color: #fff;
      }
      .r {
        display: inline-block;
        position: absolute;
        top: 0.1rem;
        left: 1.6rem;
        span {
          font-size: 0.3rem;
          font-weight: 200;
        }
      }
      span {
        padding: 0 0.2rem;
      }
    }
    .iconfont {
      font-size: 0.5rem;
      color: #fff;
    }
  }
  //content
  .content {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    margin-top: 0.4rem;
    .content-left,
    .content-right {
      flex: 1;
    }
    .content-left {
      position: relative;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.15rem;
      }
      .listview-count {
        position: absolute;
        top: 0.1rem;
        right: 0.7rem;
        color: #fff;
        font-size: 0.1rem;
        .iconfont {
          font-size: 0.1rem;
        }
      }
    }
    .content-right {
      h4 {
        color: #fff;
      }
      .author {
        display: flex;
        align-items: center;
        margin: 0.4rem 0;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
        }
        .author-name {
          display: inline-block;
          padding-left: 0.2rem;
          color: #ccc;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          .iconfont {
            font-size: 0.25rem;
          }
        }
      }
      .description {
        position: relative;
        width: 3.4rem;
        color: #fff;
        font-size: 0.2rem;
        padding-right: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        .iconfont {
          position: absolute;
          top: 0.2rem;
          right: -0.07rem;
          font-size: 0.25rem;
        }
      }
    }
  }
  // iconlist
  .icon-list {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.5rem;
    .icon-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ccc;
      span {
        font-size: 0.2rem;
        padding-bottom: 0.1rem;
      }
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
</style>