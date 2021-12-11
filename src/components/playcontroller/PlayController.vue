<template>
  <div class="play-controller">
    <!-- 播放样式 -->
    <div @click="isShow=!isShow" class="left">
      <img :src="playlist[plyaControllerIndex].al.picUrl" alt="">
      <div class="container">
        <div class="song-name">{{ playlist[plyaControllerIndex].al.name }}</div>
        <div class="song-text">横滑可以上下切换哦</div>
      </div>
    </div>
    <div class="right">
      <span v-if="paused" class="iconfont icon-24gl-play" @click="play"></span>
      <span v-else class="iconfont icon-zanting1" @click="play"></span>
      <span class="iconfont icon-24gf-playlist"></span>
    </div>
    <!-- 引入PlayMusic -->
    <PlayMusic :play="play" :paused="paused" @back="isShow=!isShow" v-show="isShow" :playDetail="playlist[plyaControllerIndex]"></PlayMusic>
    <!-- 播放组件 -->
    <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playlist[plyaControllerIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PlayMusic from '@/components/playcontroller/PlayMusic.vue'
export default {
  data() {
    return {
      paused: true,
      isShow: false
    }
  },
  components: {
    PlayMusic
  },
  computed: {
    ...mapState(['playlist', 'plyaControllerIndex'])
  },
  mounted() {
    // console.log([this.$refs.audio])
    this.$store.dispatch('reqLyric', { id: this.playlist[this.plyaControllerIndex].id })
  },
  updated() {
    this.$store.dispatch('reqLyric', { id: this.playlist[this.plyaControllerIndex].id })
  },
  methods: {
    play() {
      // console.log(this.$refs.audio.currentTime)
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
        this.Updatetime()
      } else {
        this.$refs.audio.pause()
        this.paused = true
        clearInterval(this.$store.state.id)
      }
      // console.log([this.$refs.audio])
    },

    Updatetime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.play-controller {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 1.2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 0 0.2rem;
  background-color: #fff;
  z-index: 9;
  .left {
    display: flex;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .container {
      padding-left: 0.2rem;
      .song-name {
        // font-size: 0.35rem;
        font-weight: 600;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .song-text {
        font-size: 0.2rem;
        color: #777;
      }
    }
  }
  .right {
    padding-top: 0.1rem;
    .iconfont {
      padding: 0 0.2rem;
      font-size: 0.5rem;
      font-weight: 500;
    }
  }
}
</style>