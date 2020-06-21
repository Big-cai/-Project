<template>
    <div class="content">
      <!-- 头部 -->
        <div class="nav">
      </div>
      <!-- 关闭-->
       <div class="cross">
         <button class="iconfont iconicon-test"></button>
       </div>
      <!-- logo部分 -->
      <div class="ax_default">
        <span class="iconfont iconnew"></span>
      </div>
      <!-- 登录部分 -->
      
      <Input
      textPlaceholder="用户名/手机号码" 
      type="text"
      errMsg="请输入正确的手机号"
      ></Input>
      <Input 
      textPlaceholder="昵称" 
      type="text"
      errMsg="请输入昵称"
      ></Input>

      <Input
      textPlaceholder="密码" 
      type="password"
      errMsg="请输入正确的密码"
      ></Input>
      <!-- 登录按钮 -->
     <Button btnText='登录'></Button>
     </div>
</template>

<script>
import Input from '../components/Authinput.vue'
import Button from '../components/Button.vue'
export default {
    components:{
      Input,
      Button
    }
}
</script>

<style lang="less">


// 主体部分
.content{
  width: 100vw;
  margin: 0 auto;

}
// 头部部分
.nav{
  height: 6.667vw;
  line-height: 50px;
  margin: 0 auto;
  background-color: #757575;
  display: flex;
}
// 关闭按钮
.cross{
  width: 7.5vw;
  height: 7.5vw;
  margin: 4.167vw 0 0 4.167vw;
  cursor: pointer;
}
.cross button{
  font-size: 7.5vw;
  border: 0;
  outline: none;
}

// logo部分
.ax_default{
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



</style>