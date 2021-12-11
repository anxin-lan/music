<template>
  <div class="navbar">
    <div class="navleft">
      <span class="iconfont icon-danlieliebiao"></span>
    </div>
    <div class="navcenter">
      <span @click="$router.push('/personal')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="navright" @click="$router.push('/search')">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  justify-content: space-between;
  align-items: center;
}
.navcenter {
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  .active {
    font-weight: 700;
  }
}
</style>>

