<template>
  <div>
      <!-- 首页头部 -->
   <div class="nav">
          <div class="iconfont iconnew  logo"> 
          </div>
          <div class="search">
            <input type="text" placeholder="搜索新闻" @click="$router.replace('/search')">
          </div>
          <div class="iconfont iconwode user" @click="$router.push('/personal')">
          </div>
    </div>
    <!-- tab栏 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
   .nav{
      width: 100vw;
      height: 13.889vw;
      display: flex;
      align-items: center;
      background-color: #ff0000;

    .logo{
      text-align: center;
      flex: 1;
      color: white;
      font-size: 50px;
 
    }
    .search{
      height: 13.889vw;
      line-height: 13.889vw;
      text-align: center;
      flex: 3;

      input {
        text-align: center;
        height: 9.444vw;
        border-radius: 34px;
        outline: none;
        border: 0;
        background: rgba(255, 255, 255, 0.5);
        font-size: 14px;

      }
    
    }
    .user{
      text-align: center;
      flex: 1;
      font-size: 25px;
      color: white;
    }
    }
</style>