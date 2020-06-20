<template>
    <div class="content">
        <div class="nav">
      </div>
      <!-- logo部分 -->
      <div class="ax_default">
        <img src="" alt="">
      </div>
      <div class="Inpu">
        <input type="text" placeholder="用户名/手机号码">
        <input type="password" placeholder="密码">
      </div>
     </div>
</template>

<script>


export default {
  
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #f2f2f2;
}
.content{
  max-width: 100vw;
  min-width: 88.889vw;
}
.nav{
  height: 6.667vw;
  line-height: 50px;
  margin: 0 auto;
  background-color: #757575;
  display: flex;
}

// logo部分
.ax_default{
  width: 35vw;
  height: 35vw;
}

.Inpu{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

 text-align: center;
  
}
.Inpu input{
  width: 450px;
  height: 50px;

}

</style>