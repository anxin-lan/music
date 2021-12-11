<template>
  <div class="icons">
    <div class="icons-item">
      <span class="iconfont icon-rili"></span>
      <span class="font">每日推荐</span>
    </div>
    <div class="icons-item">
      <span class="iconfont icon-FM_weixuanze"></span>
      <span class="font">私人FM</span>
    </div>
    <div class="icons-item">
      <span class="iconfont icon-gedan1"></span>
      <span class="font">歌单</span>
    </div>
    <div class="icons-item">
      <span class="iconfont icon-paihangbang"></span>
      <span class="font">排行榜</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.icons {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  height: 2.2rem;
  .icons-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .font {
      font-size: 0.2rem;
    }
    .iconfont {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      font-size: 0.7rem;
      text-align: center;
      padding-top: 0.1rem;
      margin-bottom: 0.1rem;
      border-radius: 50%;
      color: #fff;
      background-color: #ff3209;
    }
  }
}
</style>