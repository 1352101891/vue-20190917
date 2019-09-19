<template>
  <div class="rootview">
    <h1>{{title}}</h1>
    <div class="wrapper-input">
      <div class="horizon-wrap">
        <p class="pre-word">账号</p>
        <cube-input class="cube-input" v-model="username"  :clearable="clearable" ></cube-input>
      </div>
      <div class="horizon-wrap">
        <p class="pre-word">密码</p>
        <cube-input class="cube-input" v-model="password"
                    :placeholder="placeholder"
                    :type="type"
                    :maxlength="maxlength"
                    :eye="eye" ></cube-input>
      </div>
      <div class="horizon-wrap">
        <cube-button class="button" v-on:click="login" :primary="true">登陆</cube-button>
      </div>
    </div>
    <div class="wrapper-bottom">
      <p class="pre-word" v-on:click="gotoRegister">注册</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: '欢迎来到玩安卓',
      // 账号框
      username: '',
      password: '',
      clearable: {
        visible: true,
        blurHidden: true
      },
      // 密码框
      type: 'password',
      placeholder: '请输入最多10位密码',
      readonly: true,
      maxlength: 20,
      eye: {
        open: false,
        reverse: false
      }
    }
  },
  watch: {
  },
  methods: {
    gotoRegister () {
      console.log('点击了注册')
    },
    login () {
      var that = this
      if (!this.username || this.username.length < 3) {
        const toast = that.$createToast({
          txt: '用户名过短！',
          time: 1000
        })
        toast.show()
        return
      }
      let userInfo = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('user/login', userInfo).then(() => {
        console.log('用户登陆成功')
        this.$router.replace('main')
      }).catch(error => {
        const toast = that.$createToast({
          txt: '登陆失败：' + error.toString(),
          time: 1000
        })
        toast.show()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .rootview{
    text-align:center;
    position: relative;
    width: 100%;
    height: 100%;
    background: #222e4c;
    padding:1px;
  }
  h1{
    border: aliceblue;
    font-weight: normal;
    font-size: 30px;
    color: aliceblue;
    margin:50px auto;
  }
  .horizon-wrap{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .pre-word{
    color: aliceblue;
    margin-right: 10px;
  }
  .wrapper-input{
    position: absolute;
    left:0; right:0; top:30%; bottom:0;
  }
  .wrapper-bottom{
    position: absolute;
    left:0; right:0; top:90%; bottom:0;
  }
  .button{
    width: 50%;height:40px;line-height:10px;margin: 10px auto;
  }
  .cube-input{
    width: 50%;
  }
</style>
