<template>
    <div class="constent">
      <!-- 头部搜索部分 -->
       <Home/>

        <!-- 头部菜单 -->
        <van-tab
        :title="category.name"
        v-for="category in categoriesList"
        :key="category.id"
        >
          <van-list
          v-model="category.loading"
          :finished="category.finished"
          @load="loadMorePost"
          :immediate-check="false"
          finished-text="新闻"
          >
        
          </van-list>
        </van-tab>
        <!-- <div class="navigation">
          <ul>
            <li>关注</li>
            <li>头条</li>
            <li>娱乐</li>
            <li>体育</li>
            <li>汽车</li>
            <li>房产</li>
            <li class="iconfont iconjiantou1"></li>
          </ul>
        </div> -->
        <!-- 新闻部分 -->
        <div class="new">
          <div class="listnew">
            <p>林志玲穿透视黑纱裙米兰看秀 </p>
            <p>腹部微隆显孕味</p>
            <span class="shibao">火星时报 &nbsp;&nbsp;52跟帖</span>
          </div>
        </div>
        <div class="listnew2">
            <p class="lh">亚马逊雨林为何燃烧？除了新总统“急功近利”的开发，国际资本才是真凶 </p>
            <div class="tu">
              <img src="../assets/赛亚鼠.gif" alt="">
              <img src="../assets/赛亚鼠.gif" alt="">
              <img src="../assets/赛亚鼠.gif" alt="">
            </div>
            <span class="shibao">火星时报 &nbsp;&nbsp;52跟帖</span>
        </div>

        <!-- 视频 -->
        <div class="viod">
          <span>美军与英军联合训练，6机编队阵容强大</span>
            <img src="../assets/bofang.png" alt="">
        </div>
    </div>
</template>

<script>
import Home from '../components/Home.vue'
export default {
  components:{
    Home
  },
  data(){
    return{
      categoriesList:[]
    }
  },
  created(){
    // 页面创建，获取栏目
  },
}
</script>

<style lang="less" scoped>
   

    // 导航条
    ul{
      width: 100vw;
      height: 12.5vw;
      display: flex;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: #e4e4e4;
    }
    li {
      text-align: center;
      flex: 1;
      height: 45px;
      line-height: 45px;
    }
    .listnew{
     margin-top: 5.556vw;
      padding: 0 15px;
     border-bottom: 1px solid #e4e4e4;


     span{
       display: inline-block;
       height: 40px;
       line-height: 40px;
       color: #a1a1a1;
       font-size: 12px;
       
     }
    }
    .listnew2 {
      margin-top: 10px;
      padding: 0 4.167vw;
          border-bottom: 1px solid #e4e4e4;

    .tu{
      display: flex;
    }
       img {
          width: 31.111vw;
          flex: 1;
          margin-top: 5px;
       }
   span {
          display: block;
          width: 100vw;
          height: 55px;
          line-height: 55px;
          font-size: 3.333vw;
          color: #868686;
   }
    .tu img:nth-child(2){
     margin: 5px 2px 0;
   }

   .shibao{
     height: 45px;
   }
    }
  .viod{

      span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
      }
    img{
      width: 100vw;
    }
  }
       
</style>