<template>
  <div class="content">
    <!-- 我的关注 -->
    <div class="myFocus">
      <div class="jiantou">
        <span class="iconfont iconjiantou"></span>
      </div>
      <div class="cous">
        <h5>我的关注</h5>
      </div>
      <div class="emppty"></div>
    </div>
    <!-- 列表 -->
    <ul>
      <li v-for="item in followsList" :key="item.id">
        <div class="touxiagn">
        <img v-if="item.head_img" :src="$axios.defaults.baseURL + item.head_img" alt />
        <img v-else src="../assets/赛亚鼠.gif" alt />
        </div>
        <div class="conew">
          <span class="conw">{{item.nickname}}</span>
          <span class="but">{{item.create_date.split('T')[0]}}</span>
        </div>
        <div class="rigi">
          <a href="#" @click="unfollow(item.id)">取消关注</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import testPage from '../views/ceShi/testPage.vue'
export default {
    components:{
      testPage
    },
   data(){
    return{
      followsList:[],
    }
  },
  // 页面一开始就要加在数据
  // 数据的获取可以放在
  // created 或mounted
created(){
 this.loadPage()
},
methods:{
  loadPage(){
     this.$axios({
    url:'/user_follows',
    method:'get'
  }).then(res=>{
      console.log(res.data);
      this.followsList=res.data.data
  })
  },
  unfollow(id){
    this.$axios({
      url:'/user_unfollow/' + id,
    }).then(res=>{
      console.log(res.data);
      this.loadPage()
    })
  }
}

}
</script>

<style lang="less" scoped>
.content {
  max-width: 100vw;
  margin: 0 auto;
}
// 我的关注
.myFocus {
  width: 100vw;
  height: 16.667vw;
  line-height: 16.667vw;
  background-color: #b3b3b3;
  display: flex;

  .jiantou {
    flex: 1;
  }
  .jiantou span {
    padding: 0 15px;
  }
  .cous {
    text-align: center;
    flex: 1;
  }
  .emppty {
    flex: 1;
  }
}
// 列表
ul {
  padding: 0 4.167vw;
  margin-top: 5.556vw;
}
ul li {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
}
// 左
.touxiagn {
  text-align: center;
  flex: 1;
}
// 中
.conew {
  width: 45.833vw;
  height: 16.667vw;
  flex: 2;
  display: flex;
  flex-direction: column;
}
// 中上
.conw {
  height: 8.333vw;
  line-height: 11.111vw;
}
// 中下/
.but {
  width: 100%;
  height: 8.333vw;
  line-height: 6.944vw;
  font-size: 3.889vw;
  color: #888888;
  
}
// 右
.rigi {
  text-align: center;
  flex: 1;
}
// 右 里
.rigi a {
  display: inline-block;
  width: 20.278vw;
  height: 8.333vw;
  line-height: 8.333vw;
  font-size: 3.889vw;
  border-radius: 4.167vw;
  background-color: #e1e1e1;
  margin-top: 4.167vw;
}
// 头像宽度样式
ul img {
  display: inline-block;
  width: 11.111vw;
  height: 11.111vw;
  border-radius: 5.556vw;
  margin-top: 2.778vw;
}
</style>