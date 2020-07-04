<template>
  <div class="content">
    <!-- 头部 -->
    <div class="nav"></div>
    <!-- 关闭-->
    <div class="cross">
      <button class="iconfont iconicon-test" @click="ntbOut"></button>
    </div>
    <!-- logo部分 -->
    <div class="ax_default">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 登录部分 -->

    <Input
      textPlaceholder="用户名/手机号码"
      type="text"
      rule="^\d{5,11}$"
      errMsg="请输入正确的手机号"
      @valChanged="setUsername"
    ></Input>

    <Input
      textPlaceholder="昵称"
      type="text"
      rule="^[\u4E00-\u9FA5A-Za-z0-9_]+$"
      errMsg="请输入昵称"
      @valChanged="setNickname"
    ></Input>

    <Input
      textPlaceholder="密码"
      type="password"
      rule="^.{3,9}$"
      errMsg="请输入正确的密码"
      @valChanged="setPassword"
    ></Input>
    <!-- 登录按钮 -->
    <Button btnText="注册" @clicked="hanck"></Button>
  </div>
</template>

<script>
import Input from '../components/Authinput.vue'
import Button from '../components/Button.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
  
    setUsername(username) {
      this.username = username
    },
    setNickname(nickname) {
      this.nickname = nickname
    },
    setPassword(password) {
      this.password = password
    },
    hanck() {
      // 发送请求前需要表单校验
      if (!this.username || !this.password || !this.nickname) {
        this.$toast.fail('请填写完整信息')
        return
      }
      // 发送请求
      this.$axios({
        url: 'http://127.0.0.1:3000/register',
        method: 'post',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      })
        .then(res => {
          const { message, data } = res.data
          console.log(message)
          console.log(data)

          if (message == '注册成功') {
            this.$toast.success(message)

            const timer = setInterval(() => {
              // 某些定时器操作
              this.$router.replace('/login')
            }, 3000)
            // 通过$once来监听定时器
            // 在beforeDestroy钩子触发时清除定时器
            this.$once('hook:beforeDestroy', () => {
              clearInterval(timer)
            })
            
          } else {
            this.$toast.fail(message)
          }
        })
        .catch(err => {})
    },
       ntbOut(){
      this.$router.replace('/login')
    },
  }
}
</script>
<style lang="less" scoped>
// 主体部分
.content {
  width: 100vw;
  margin: 0 auto;
}
// 头部部分
.nav {
  height: 6.667vw;
  line-height: 50px;
  margin: 0 auto;
  background-color: #757575;
  display: flex;
}
// 关闭按钮
.cross {
  width: 7.5vw;
  height: 7.5vw;
  margin: 4.167vw 0 0 4.167vw;
  cursor: pointer;
}
.cross button {
  font-size: 7.5vw;
  border: 0;
  outline: none;
}

// logo部分
.ax_default {
  text-align: center;
  width: 35vw;
  height: 35vw;
  margin: 0 auto;
  color: #a0c5e8;
}
.ax_default span {
  font-size: 35vw;
  font-family: normal;
}
</style>