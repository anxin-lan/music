<template>
  <div class="home">
    <nav-bar></nav-bar>
    <swiper></swiper>
    <icons></icons>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Swiper from '@/components/Swiper.vue'
import Icons from '@/components/Icons.vue'
import MusicList from '@/components/MusicList.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    Icons,
    MusicList
  }
}
</script>
<style scoped>
</style>
