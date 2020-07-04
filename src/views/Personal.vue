<template>
  <div>
    <div class="profile">
      <!-- 头部部分 -->
      <div class="let" v-if="userInfo">
        <img v-if="userInfo.head_img" :src="'http://127.0.0.1:3000'+userInfo.head_img" alt="" />
        <img v-else  src="../assets/赛亚鼠.gif" alt="" >
      </div>
      <!-- 中间部分 -->
      <div class="info">
        <span class="top">
          <span class="iconfont iconxingbienan nan" v-if="userInfo.gender==1"></span>
          <span class="iconfont iconxingbienv nv" v-else></span>
          {{userInfo.nickname}}
        </span>
        <span class="but">{{(userInfo.create_date).split('T')[0]}}</span>
      </div>
      <!-- 右边部分 -->
      <span class="iconfont iconjiantou1 jian"></span>
    </div>

    <Gegen
    labelText="我的关注"
    descText="关注的用户"
    @barClick="Focus"
    >
    </Gegen>

    <Gegen
    labelText="我的跟帖"
    descText="跟帖/回复"
    @barClick="$router.push('/comments')"
    >
    </Gegen>

    <Gegen
    labelText="我的收藏"
    descText="文章/视频"
    @barClick="$router.push('/collection')"
    >
    </Gegen>

       <Gegen
    labelText="编辑资料"
    descText=""
    @barClick="rouzhuan"
    >
    </Gegen>
  
       <Gegen
    labelText="退出登录"
    descText="注销用户"
    @barClick="logout"
    >
    </Gegen>
  </div>
</template>

<script>
import Gegen  from '../components/geren'
export default {
  components:{
    Gegen
  },
  data(){
    return{
      userInfo:{
        create_date:''
      }
    }
  },
  mounted(){
    this.$axios({
      url:"http://127.0.0.1:3000/user/"+localStorage.getItem('userId'),
      method:'GET',
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      console.log(res.data);
      const {message,data}=res.data;
      if(message=="获取成功"){
          this.userInfo=data;
          console.log(this.userInfo);
          
      }else{
        this.$toast.fail('获取失败')
      }
    })
  },
  methods:{
    
    logout(){
      // 清理数据
      localStorage.removeItem('userId')
      ;localStorage.removeItem('token')
      // 2.跳转
      this.$router.replace('/login')
    },
    rouzhuan(){
      this.$router.replace('/edit')
    },
    Focus(){
      this.$router.replace('/focus')
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  height: 100px;
  display: flex;
  text-align: center;
  padding: 0 4.167vw;
  box-sizing: border-box;
  border-bottom: 4px solid #e4e4e4;

  .let {
    margin-top: 15px;
    flex: 1;

    img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
    }
  }

  .info {
    text-align: left;
    flex: 2;
    display: flex;
    flex-direction:column;
    padding-top: 30px;
    padding-left: 10px;
    
    .nan{
      color: #78bbeb;
    }
    .top {
     font-size: 14px;
    }
    .but {
      font-size: 14px;
      color: #a2a2a2;
      padding-left: 20px;
    }
  }
  .jian {
    line-height: 100px;
    text-align: right;
    flex: 1;
    color: #a2a2a2;
  }
}

.nv{
  color: pink;
}
</style>