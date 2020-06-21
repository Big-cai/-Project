<template>
  <div class="Inpu">
       <form action="" class="frm">
          <input type="text"  placeholder="用户名/手机号码">
          <input type="text" placeholder="昵称">
        <input type="password"  placeholder="密码">
       </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="less">
.frm{
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
  background-color: white;
  font-size: 4.444vw;
}
</style>
