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
                    :maxlength="maxlength"
                    :eye="eye" ></cube-input>
      </div>
      <div class="horizon-wrap">
        <p class="pre-word">确认密码</p>
        <cube-input class="cube-input" v-model="surePassword"
                    :placeholder="placeholder"
                    :maxlength="maxlength"
                    :eye="eye" ></cube-input>
      </div>
      <div class="horizon-wrap">
        <cube-button class="button" v-on:click="register" :primary="true">注册</cube-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      title: '注册',
      // 账号框
      username: '',
      password: '',
      surePassword: '',
      clearable: {
        visible: true,
        blurHidden: true
      },
      // 密码框
      type: 'password',
      placeholder: '请输入最多20位密码',
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
    register () {
      console.log('点击了注册')
      if (!this.username || this.username.length < 3) {
        this.showToast('用户名过短！')
        return
      }
      if (this.password && this.surePassword && this.password === this.surePassword) {
        let userInfo = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('user/register', userInfo).then(() => {
          console.log('用户登陆成功')
          this.$router.replace('main')
        }).catch(error => {
          this.showToast(error.toString())
        })
      } else {
        this.showToast('两次密码输入不一致！')
      }
    },
    showToast (message) {
      const toast = this.$createToast({
        txt: '提示：' + message,
        time: 1000
      })
      toast.show()
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
  .button{
    width: 50%;height:40px;line-height:10px;margin: 10px auto;
  }
  .cube-input{
    width: 50%;
  }
</style>
