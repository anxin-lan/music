<template>
  <div class="music-list">
    <div class="list-top">
      <div class="list-title">发现好歌单</div>
      <div class="list-more">查看更多</div>
    </div>
    <!-- 歌单轮播图 -->
    <div class="mlist">
      <div class="swiper mySwiper" id="music-swiper">
        <div class="swiper-wrapper">

          <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide" v-for="(item,index) in state.musicList" :key="index">
            <img :src="item.picUrl" :alt="item.name">
            <div class="title">{{ item.name }}</div>
            <div class="count">
              <span class="iconfont icon-24gl-play"></span>
              {{ changeNum(item.playCount) }}
            </div>
          </router-link>

        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
//swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { getMusicList } from '@/api/index.js'
import { onMounted, onUpdated } from '@vue/runtime-core'
import { reactive } from 'vue'

export default {
  //   data() {
  //     return {
  //       musicList: []
  //     }
  //   },
  //   methods: {
  //     changeNum(num) {
  //       let res = 0
  //       if (num >= 100000000) {
  //         res = (num / 100000000).toFixed(2) + '亿'
  //       } else if (num >= 10000) {
  //         res = (num / 10000).toFixed(2) + '万'
  //       }
  //       return res
  //     }
  //   },
  //   async mounted() {
  //     //请求推荐歌单数据
  //     let result = await getMusicList()
  //     this.musicList = result.data.result
  //     // this.store.commit('setPlayList',this.musicList.tracks)
  //     console.log(result.data.result.tracks)
  //   },
  //   updated() {
  //     var swiper = new Swiper('#music-swiper', {
  //       slidesPerView: 3,
  //       spaceBetween: 10,
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true
  //       }
  //     })
  //   }
  // }
  setup() {
    let state = reactive({ musicList: [] })
    function changeNum(num) {
      let res = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num >= 10000) {
        res = (num / 10000).toFixed(2) + '万'
      }
      return res
    }
    onMounted(async () => {
      let result = await getMusicList()
      state.musicList = result.data.result
    })
    onUpdated(() => {
      var swiper = new Swiper('#music-swiper', {
        slidesPerView: 3,
        spaceBetween: 10
      })
    })
    return {
      state,
      changeNum
    }
  }
}
</script>

<style lang="less" scoped>
.music-list {
  width: 100%;
  overflow: hidden;
  height: 4rem;
}
.list-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.8rem;
  padding: 0.2rem;

  .list-title {
    font-weight: 700;
    font-size: 0.4rem;
  }
  .list-more {
    width: 1.3rem;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    font-size: 0.15rem;
    color: #666;
  }
}
.mlist {
  padding-left: 0.2rem;
  margin-top: 0.1rem;
  .mySwiper {
    width: 100%;
    height: 3rem;
  }
  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
      border-radius: 0.2rem;
    }
    .title {
      height: 0.69rem;
      font-size: 0.2rem;
      overflow: hidden;
    }
    .count {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      color: #fff;
      font-size: 0.2rem;
    }
    .iconfont {
      font-size: 0.2rem;
    }
  }
}
</style>