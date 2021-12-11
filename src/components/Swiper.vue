<template>
  <div class="swiper">
    <div class="swiper-container" id="swiperindex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in images" :key="item.id"><img :src="item.pic"></div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
//swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { getBanner } from '@/api/index.js'

export default {
  components: {
    Swiper
  },
  data() {
    return {
      images: [
        {
          id: '01',
          pic: require('@/assets/images/m1.jpg')
        },
        {
          id: '02',
          pic: require('@/assets/images/m2.jpg')
        },
        {
          id: '03',
          pic: require('@/assets/images/m3.jpg')
        }
      ]
    }
  },
  async mounted() {
    var mySwiper = new Swiper('#swiperindex', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    //请求banner数据
    // let res = await axios.get('http://localhost:3000/banner?type=1')
    let res = await getBanner(1)
    this.images = res.data.banners
  }
}
</script>

<style lang="less">
#swiperindex {
  .swiper {
    position: relative;
  }
  .swiper-container {
    width: 7.1rem;
    height: 3rem;
    border-radius: 0.1rem;
  }
  .swiper-slide img {
    width: 100%;
    height: 3rem;
  }
  .swiper-pagination-bullet-active {
    background-color: #c70d0d;
  }
}
</style>