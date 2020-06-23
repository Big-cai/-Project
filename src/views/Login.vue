<template>
  <div class="content">
    <!-- 头部 -->
    <div class="nav"></div>
    <!-- 关闭-->
    <div class="cross">
      <button class="iconfont iconicon-test" ></button>
    </div>
    <!-- logo部分 -->
    <div class="ax_default">
      <span class="iconfont iconnew">
        <!-- <img src="../assets/赛亚鼠.gif" alt=""> -->
      </span>
    </div>
    <!-- 登录部分 -->
    <Input
      maxlength="11"
      textPlaceholder="用户名/手机号码"
      type="text"
      errMsg="请输入正确的手机号"
      :rule="ruleUsername"
      @valChanged="setUsername"
    ></Input>
    <Input
      maxlength="16"
      textPlaceholder="密码"
      type="password"
      errMsg="请输入三到九位密码"
      :rule="rulePassword"
      @valChanged="setPassword"
    ></Input>
    <!-- 登录按钮 -->
    <Button btnText="登录" @clicked="login"></Button>
  
      <div class="too">
        <a href="#">忘记密码</a>
        <span @click="reig">注册</span>
      </div>
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
      ruleUsername: '^\\d{3,11}$',
      rulePassword: '^.{3,9}$'
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
    setPassword(password) {
      this.password = password
    },
    reig(){
      console.log('出发时间');
      
       this.$router.push('/register')
    },

    login() {
      // 点击按钮发送请求前，需要先校验
      // 表单数据的正确性
      // 1.如果表单为空，提示用户请输入完整信息
      if (!this.username || !this.password) {
        this.$toast.fail('不能为空，请输入完整信息')
        return
      }

      // 进行表单校验
      var regExpUsername = new RegExp(this.ruleUsername)
      if (!regExpUsername.test(this.username)) {
        this.$toast.fail('用户名格式错误')
        return
      }
      var regPassword = new RegExp(this.rulePassword)

      if (!regPassword.test(this.password)) {
        this.$toast.fail('密码格式错误')
        return
      }

      // 点击登录按钮 发送请求
      this.$axios({
        url: 'http://127.0.0.1:3000/login',
        method: 'POST',
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res) => {
        // 数据都在res.data里面
        const { message, data } = res.data
        console.log(res.data);
        console.log(message);
         console.log(123); 
        

        if (message === "登录成功") {
          // 登陆成功后，把token和id保存到本地
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)              
          const timer = setInterval(() => {
              // 某些定时器操作
              this.$router.push("/personal");
            }, 3000)
            // 通过$once来监听定时器
            // 在beforeDestroy钩子触发时清除定时器
            this.$once('hook:beforeDestroy', () => {
              clearInterval(timer)
            })
          
          // 登陆成功 成功弹出提示框
            this.$toast.success(message)
        } else {
          // 登录失败 失败弹出提示框
          this.$toast.fail(message)
        }
          
            
      }).catch(err=>{

      })
    },
  }
}
</script>

<style lang="less">
// 主体部分
.content {
  width: 100vw;
  height: 208.333vw;
  margin: 0 auto;
  background-color: white;
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
  background-color: white;
}

// logo部分
.ax_default {
  text-align: center;
  width: 35vw;
  height: 35vw;
  margin: 0 auto;
  color: #d81e06;
}
.ax_default span {
  font-size: 35vw;
  font-family: normal;
}
.ax_default img {
  display: block;
  width: 22.222vw;
  height: 22.222vw;
  margin: 0 auto;
  border: 0.278vw solid #757575;
  border-radius: 13.889vw;
}

.too{
  width: 100vw;
  height: 8.333vw;
  margin-top: 30px;
  padding: 0 4.167vw;
  box-sizing: border-box;
  display: flex;

  a,span {
    margin: 0 12.5vw;
    flex: 1;
    font-size: 12px;
    color: #cc3300;
    cursor: pointer;
  }
 span{
    text-align: right;
  }
}
</style>