<template>
  <div id="app">
      <router-link to="/login"></router-link>
      <router-view></router-view>
    </div> 
</template>

<style lang="less">
// 引入字体图标
@import url('http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css');
// 引入全局css样式
*{
    margin:0;
    padding:0;
}
    
a{
    color: inherit;
    text-decoration: none;
    
}


a:hover{
    text-decoration: none;
}

ul,li,ol{
    list-style: none;
}
</style>
