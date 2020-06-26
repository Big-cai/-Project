<template>
    <div class="content"  v-if="userInfo">
      <!-- 编辑资料 -->
        <div class="Edit">
          <span class="iconfont iconjiantou"></span>
          <h5>编辑资料</h5>
        </div>
        <!-- 头像 -->
        <div class="big">
          <img  v-if="userInfo.head_img" :src="$axios.defaults.baseURL + userInfo.head_img" alt="">
          <img v-else src="../assets/赛亚鼠.gif" alt="">
        </div>
        <!-- 昵称列表 -->
        <Test  
        @clicked='isShow=true'
        btnText="昵称"
        
        :nickname="userInfo.nickname"
        ></Test>
         <Test  
        @clicked='isShow=true'
        btnText="密码"
        
        nickname="*****"
        ></Test>
         <Test  
        @clicked='isShow=true'
        btnText="性别"
        :nickname="userInfo.gender==1? '男':'女'"
        ></Test>
    
   <van-dialog v-model="isShow" title="修改昵称" show-cancel-button @confirm="setName">
     <van-field v-model="ckname" placeholder="请输入新昵称" ></van-field>
   </van-dialog>
       
    </div>
</template>

<script>
import Test from '../components/Topnav.vue'
export default {
  components:{
    Test
  },
   created() {
     this.$axios({
       url:'/user/' +localStorage.getItem('userId'),
       method:'get',
       headers:{
         Authorization: 'Bearer ' + localStorage.getItem('token')
       }
     }).then(res=>{
       const {message,data}=res.data;
       if(message=='获取成功'){
         this.userInfo=data;
         console.log(this.userInfo);
         
       }
     })
    },
  data(){
    return{
      userInfo:null,
      isShow:false,
      ckname:''
    }
   
  },
  methods:{
   setName(){
     console.log('这是新昵称',this.ckname);
    //  点击确定发送请求
    // this.$axios({
    //   url:'/user_update/' +localStorage.getItem('userId'),
    //   method:'post',
    //   data:{
    //     nick:this.ckname
    //   },
    //   headers:{
    //     Authorization:'Bearer'+localStorage.getItem('token')
    //   }
    // }).then(res=>{
    //   console.log(res.data);
      
    // })
   }
  
  }
}
</script>

<style lang="less" scoped>
.content{
  margin: 0 auto;
  width: 100vw;
  
}
// 头部样式
  .Edit{
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #f2f2f2;
    padding: 0 15px;
    
    h5{
      text-align: center;
      flex: 1;
    }
  }
  // 头像样式
  .big{
    height: 19.444vw;
  }
  .big img{
    display: block;
    margin: 20px auto;
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 9.722vw;
  }
// 列表

</style>