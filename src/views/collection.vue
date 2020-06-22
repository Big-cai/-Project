<template>
    <div class="contetn">
      <!-- 头部 -->
      <div class="box">
         <span class="iconfont iconjiantou"></span>
              <h5>我的收藏</h5>  
      </div>
      <!-- 收藏列表 -->
        <ul>
          <li>
            <p>林志玲穿透视黑纱裙米兰看秀 </p>
            <p>腹部微隆显孕味</p>
            <span class="shibao">火星时报 &nbsp;&nbsp;52跟帖</span>
          </li>
          <li>
            <p class="lh">亚马逊雨林为何燃烧？除了新总统“急功近利”的开发，国际资本才是真凶 </p>
            <div class="tu">
              <img src="../assets/赛亚鼠.gif" alt="">
              <img src="../assets/赛亚鼠.gif" alt="">
              <img src="../assets/赛亚鼠.gif" alt="">
            </div>
            <span class="shibao">火星时报 &nbsp;&nbsp;52跟帖</span>
          </li>
            <li>
              <p>林志玲穿透视黑纱裙米兰看秀 </p>
              <p>腹部微隆显孕味</p>
              <span class="shibao">火星时报 &nbsp;&nbsp;52跟帖</span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.contetn{
  max-width: 100vw;
  margin: 0 auto;
  
}

    .box{
     
     padding: 0 4.167vw;
      height: 50px;
      line-height: 50px;
      background-color: pink;
      display: flex;

      h5{
        text-align: center;
        flex: 1;
      }
   }
   ul{
     margin-top: 5.556vw;
     

  li{
    margin-top: 5.556vw;
    padding: 0 15px;
     border-bottom: 1px solid #e4e4e4;
  }
     .shibao {
       display: block;
       width: 100vw;
       height: 55px;
       line-height: 55px;
       font-size: 3.333vw;
       color: #868686;
     }
   }
   
   .tu {
     display: flex;
     
   }
   .tu img{
     width: 31.111vw;
     flex: 1;
     margin-top: 5px;
   }
   .tu img:nth-child(2){
     margin: 5px 1px 0;
   }
</style>