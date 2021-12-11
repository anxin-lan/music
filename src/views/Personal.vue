<template>
  <div class="personal">
    <!-- personal-navbar -->
    <div class="navbar">
      <div class="navleft">
        <span class="iconfont icon-danlieliebiao" @click="$router.push('/')"></span>
        <van-badge :content="200" max="99" class="icon" />
      </div>
      <div class="navright" @click="$router.push('/search')">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>

    <!-- personal-content -->
    <div class="percontent">
      <img :src="$store.state.user.userDetail.profile.backgroundUrl" alt="">
      <div class="perinfo">

        <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
        <div class="userinfo">
          <div class="name">{{$store.state.user.userDetail.profile.nickname}}</div>
          <span>{{ $store.state.user.userDetail.profile.followeds }} 关注</span>
          <span>{{ $store.state.user.userDetail.profile.newFollows }} 粉丝</span>
          <span>Lv.{{ $store.state.user.userDetail.level }}</span>
        </div>
      </div>
      <div class="pericons">
        <div class="iconitems">
          <span class="iconfont icon-bofang"></span>
          <span class="fonts">最近播放</span>
        </div>
        <div class="iconitems">
          <span class="iconfont icon-gedan1"></span>
          <span class="fonts">本地/下载</span>
        </div>
        <div class="iconitems">
          <span class="iconfont icon-wodehaoyou"></span>
          <span class="fonts">我的好友</span>
        </div>
        <div class="iconitems">
          <span class="iconfont icon-shoucang"></span>
          <span class="fonts">收藏和赞</span>
        </div>
      </div>

      <div class="permylove">
        <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
        <div class="mylove">
          <div class="lovename">我喜欢的音乐</div>
          <div class="lovecount">共听过{{ $store.state.user.userDetail.listenSongs }}首歌</div>
        </div>
        <div class="loves">
          <span class="iconfont icon-huaban"></span>
          <span>心动模式</span>
        </div>
      </div>
    </div>
    <!-- songlists-tab -->
    <div class="musictab">
      <van-tabs v-model="active">
        <van-tab title="创建歌单">创建歌单</van-tab>
        <van-tab title="收藏歌单">收藏歌单</van-tab>
        <van-tab title="歌单助手">歌单助手</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    }
  }
}
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  height: 12rem;

  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    .navleft {
      position: relative;
      .icon {
        position: absolute;
        top: -0.1rem;
        right: -0.4rem;
      }
    }
  }
  .percontent {
    margin-top: 1rem;
    img {
      width: 100%;
      height: 5rem;
    }
    .perinfo {
      position: relative;
      width: 90%;
      height: 2rem;
      padding: 0 0.5rem;
      margin: -0.5rem auto 0;
      border-radius: 0.25rem;
      background-color: #ededed;
      img {
        position: absolute;
        top: -0.7rem;
        left: 2.8rem;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
      }
      .userinfo {
        text-align: center;
        padding-top: 0.8rem;
        .name {
          margin: 0.1rem 0;
          font-size: 0.35rem;
          font-weight: 600;
        }
        span {
          padding: 0 0.3rem;
          color: #888;
        }
      }
    }
    .pericons {
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: 2rem;
      padding: 0 0.5rem;
      margin: 0.5rem auto 0;
      border-radius: 0.25rem;
      background-color: #ededed;
      .iconitems {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.5rem;
        .iconfont {
          font-size: 0.55rem;
          color: #fe4045;
        }
        .fonts {
          padding-top: 0.1rem;
          color: #444;
          font-size: 0.2rem;
        }
      }
    }
    .permylove {
      width: 90%;
      height: 2rem;
      padding: 0 0.5rem;
      margin: 0.5rem auto 0;
      border-radius: 0.25rem;
      background-color: #ededed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 0.15rem;
      }
      .mylove {
        padding-right: 1rem;
        .lovecount {
          font-size: 0.2rem;
          color: #999;
          padding-top: 0.1rem;
        }
      }
      .loves {
        font-size: 0.2rem;
        display: flex;
        align-items: center;
        .iconfont {
          color: red;
        }
      }
    }
  }
  .musictab {
    width: 80%;
    height: 5rem;
    padding: 0 0.5rem;
    margin: 0.5rem auto 0;
    border-radius: 0.25rem;
  }
}
</style>