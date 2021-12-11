<template>
  <div class="login">

    <!-- navbar -->
    <div class="loginview-top-nav">
      <div class="list-left">
        <div @click="$router.push('/')"><span class="iconfont icon-zuojiantou"></span></div>

      </div>
    </div>

    <!-- 登录主界面 -->
    <h3 class="logintop">登录到MUSIC</h3>
    <div class="logincontent">
      <van-form @submit="onSubmit">
        <van-field v-model="phone" name="用户名" label="用户名" placeholder="用户名/手机号" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="loginEvent">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="loginfooter" @click="$router.push('/forgetpass')">忘记密码?</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      // console.log('submit', values)
    },
    loginEvent: async function () {
      let result = await this.$store.dispatch('login', { phone: this.phone, password: this.password })
      console.log(result)
      if (result.data.code == 200) {
        this.$router.push('/personal')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .logintop {
    text-align: center;
    padding: 1rem 0;
  }
  .loginfooter {
    width: 1.5rem;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #777;
  }

  .loginview-top-nav {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    padding: 0 0.2rem;
    .list-left,
    .list-right {
      position: relative;
      display: flex;
      align-items: center;
      span {
        padding: 0 0.2rem;
      }
    }
    .iconfont {
      font-size: 0.5rem;
      color: #333;
    }
  }
}
</style>>