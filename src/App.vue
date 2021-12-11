<template>
  <div>
    <router-view />
    <PlayController></PlayController>
  </div>
</template>
<script>
import PlayController from '@/components/playcontroller/PlayController.vue'

export default {
  components: {
    PlayController
  }
  // mounted() {
  //   let userData = JSON.parse(localStorage.userData)
  //   console.log(userData)
  //   this.$store.commit('setUser', userData)
  // }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}
.iconfont {
  font-size: 0.4rem;
}
</style>
