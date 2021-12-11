<template>
  <div class="forgetpass">
    <div class="text">请再好好想想...</div>
    <span @click="$router.push('/login')">点此返回登录页</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.forgetpass {
  width: 3rem;
  height: 4rem;
  text-align: center;
  margin: 3rem auto;
  span {
    padding-top: 0.4rem;
    color: red;
  }
}
</style>