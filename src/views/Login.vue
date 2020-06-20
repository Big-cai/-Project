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
      <div class="Inpu">
       <form action="" class="frm">
          <input type="text" v-model='mima.username' placeholder="用户名/手机号码">
        <input type="password" v-model='mima.pass' placeholder="密码">
       </form>
      </div>

      <!-- 登录按钮 -->
      <div class="btn">
        <button>登录</button>
      </div>
     </div>
</template>

<script>


export default {
    data(){
      return{
        mima:{
          username:'',
          pass:''
        }
        
      }
    },
    methods:{  
      aaa(){
        console.log(mima);
        
      }
    }
}
</script>

<style lang="less">

body{
  background-color: #f2f2f2;
}
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

.frm{
  // display: flex;
  // flex-wrap: wrap;
  // width: 100%;
  
  text-align: center;
}
.Inpu input{
  width: 88.333vw;
  height: 11.111vw;
  margin-bottom: 4.167vw;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #757575;
  outline: none;
  background-color: #f2f2f2;
  font-size: 4.444vw;

}
.btn{
  width: 88.333vw;
  height: 13.333vw;
}
.btn button {
  width: 88.333vw;
  height: 13.333vw;
  border-radius: 6.944vw;
  outline: none;
  background-color: #cc3300;
  color: #f8e4dd;
  border: 0;
  font-size: 4.444vw;
  cursor: pointer;
  margin: 6.944vw;
  // -webkit-tap-highlight-color: transparent; 
}
</style>