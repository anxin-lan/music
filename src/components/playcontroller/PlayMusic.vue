<template>
  <div class="play-music">
    <div class="music-bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
    <!-- 播放详情页顶部nav -->
    <div class="music-nav">
      <div class="back" @click="$emit('back')">
        <span class="iconfont icon-zuojiantou"></span>
      </div>
      <div class="content">
        <div class="song-name">
          <marquee behavior="scroll" direction="left"> {{ playDetail.al.name }}</marquee>

        </div>
        <!-- <div class="song-author">{{ item.ar[0].name }}</div> -->
      </div>
      <div class="share">
        <span class="iconfont icon-dibudaohanglan-"></span>
      </div>
    </div>
    <!-- 播放详情页中间部分 -->
    <div class="music-content" v-show="!isLyric">
      <img class="handle" :class="{active:!paused}" src="@/assets/images/h3.png" alt="">
      <img class="price" src="@/assets/images/h1.png" alt="">
      <img class="content-img" :src="playDetail.al.picUrl" alt="" @click="isShowLyric">
    </div>
    <!-- 播放页歌词部分 -->
    <div class="music-lyric" v-show="isLyric" ref="musiclyric">
      <p :class="{active:(currentTime*1000 >= item.pre && currentTime*1000 < item.time)}" v-for="(item,index) in $store.getters.lyricList" :key="index" @click="isShowContent">{{ item.lyric }}</p>
    </div>
    <!-- 播放页进度条 -->
    <div class="progress"></div>
    <!-- 播放页底部 -->
    <div class="music-footer">
      <span class="iconfont icon-liebiaoxunhuan"></span>
      <span class="iconfont icon-shangyiqu101" @click="goPlay(-1)"></span>
      <span v-if="paused" class="iconfont playcenter icon-bofang" @click="play"></span>
      <span v-else class="iconfont playcenter icon-zanting1" @click="play"></span>
      <span class="iconfont icon-xiayiqu101" @click="goPlay(1)"></span>
      <span class="iconfont icon-24gf-playlist"></span>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
import { mapState } from 'vuex'
export default {
  props: ['playDetail', 'paused', 'play'],
  data() {
    return {
      isLyric: true
    }
  },
  computed: {
    ...mapState(['lyric', 'currentTime', 'playlist', 'plyaControllerIndex'])
  },
  watch: {
    currentTime(newValue) {
      // console.log(newValue)
      // console.log([this.$refs.musiclyric])
      let p = document.querySelector('p.active')
      // console.log([p])
      // let offsetTop = p.offsetTop
      this.$refs.musiclyric.scrollTop = p.offsetTop
    }
  },
  methods: {
    goPlay(num) {
      // console.log(num)
      // console.log(this.playlist)
      // console.log(this.plyaControllerIndex)
      let index = this.plyaControllerIndex + num
      if (index < 0) {
        index = this.playlist.length - 1
      } else if (index == this.playlist.length) {
        index = 0
      }
      this.$store.commit('setPlayIndex', index)
    },
    isShowContent() {
      if (this.isShowContent) {
        this.isLyric = false
      }
    },
    isShowLyric() {
      if (this.isShowLyric) {
        this.isLyric = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.play-music {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .music-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(50px);
  }
  .music-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    padding: 0 0.2rem;
    .iconfont {
      font-size: 0.5rem;
    }
    marquee {
      flex: 1;
      width: 5rem;
    }
  }
  .music-content {
    position: absolute;
    top: 0.9rem;
    left: 0;
    width: 7.5rem;
    height: 7.5rem;
    .handle {
      position: absolute;
      left: 3.5rem;
      width: 2.5rem;
      height: auto;
      transform-origin: 0.3rem 0;
      transform: rotate(-15deg);
      transition: all 2s;
      z-index: 2;
    }
    .handle.active {
      position: absolute;
      left: 3.5rem;
      width: 2.5rem;
      height: auto;
      transform-origin: 0.3rem 0;
      transform: rotate(7deg);
      transition: all 2s;
      z-index: 2;
    }
    .price {
      position: absolute;
      top: 2.9rem;
      left: 1.1rem;
      width: 5.5rem;
      height: auto;
    }
    .content-img {
      position: absolute;
      top: 3.9rem;
      left: 2.1rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      animation: playimg 20s linear infinite;
    }
    @keyframes playimg {
      to {
        transform: rotate(360deg);
      }
    }
  }
  .music-lyric {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 7.5rem;
    height: 9rem;
    overflow: scroll;
    color: #fff;
    text-align: center;
    .active {
      color: orangered;
    }
  }
  .music-footer {
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    padding: 0 0.4rem;
    // background-color: red;
    .iconfont {
      font-size: 0.45rem;
      color: #fff;
      opacity: 0.8;
    }
    .playcenter {
      font-size: 0.95rem;
    }
  }
}
</style>