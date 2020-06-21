<template>
  <div class="content">
    <!-- 头部导航 -->
    <div class="nav"></div>
    <!-- 个人信息部分 -->
    <div class="info">
      <div class="let">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="con">
        <div class="tp">
          <span class="iconfont iconxingbienan"></span>
          火星网友</div>
        <div class="dte">
          2019-10-10
        </div>
      </div>
      <div class="rig">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="u_div">
    </div>
    <!-- 列表部分 -->
    <ul class="list">
      <li>
        <div class="_left">我的关注</div>
        <div class="_rig">关注的用户
          <span class="iconfont iconjiantou1"></span>
        </div>
      </li>
      <li>
        <div class="_left">我的跟帖</div>
        <div class="_rig">跟帖/回复
          <span class="iconfont iconjiantou1"></span>
        </div>
      </li>
      <li>
        <div class="_left">我的收藏</div>
        <div class="_rig">文章/视频
          <span class="iconfont iconjiantou1"></span>
        </div>
      </li>
      <li>
        <div class="_left">设置</div>
        <div class="_rig">
          <span class="iconfont iconjiantou1"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
// 全局父容器
.content {
  width: 100vw;
}
// 头部导航样式
.nav {
  height: 6.667vw;
  line-height: 13.889vw;
  margin: 0 auto;
  background-color: #757575;
}
// 头像个人信息
.info {
  text-align: center;
 display: flex;
 padding: 2.778vw;

}
// 头像个人信息左侧样式
.let{
  flex: 1;
}
// 头像个人信息头像样式
.let img{
  width: 19.444vw;
  height: 19.444vw;
  border: 1px solid #616879;
  border-radius: 11.667vw;
}
// 头像个人信息中间部分样式
.con{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  align-items: flex-start;
}
// 头像个人信息中间昵称显示样式
.tp {
  height: 8.333vw;
  line-height: 12.333vw;
}
.tp span{
  color: #74b9eb;
}
// 头像个人信息中间时间样式
.dte{
   height: 8.333vw;
   line-height: 5.333vw;
   color: #c1c1c1;
}
// 头像个人信息右侧样式
.rig{
  flex: 1;
}
.rig span{
  float: right;
  line-height: 21.3vw;
}
// 分割线样式
.u_div{
  width: 100vw;
  height: 1.389vw;
  background-color: #e4e4e4;
}
// 列表样式
.list{
  padding: 0 15px;
}
.list li{
  height: 13.889vw;
  line-height: 13.889vw;
  margin-bottom: 1px;
  display: flex;
}
._left{
  flex: 1;
}
._rig{
color: #a0a0a0;
font-size: 3.333vw;
}

// .list li{
//   width: 360px;
//   height: 50px;
//   line-height: 50px;
//   border-bottom: 1px solid #e4e4e4;
//   display: flex;
//   justify-content: space-between;
//   box-sizing: border-box;
// }
// ._left {
  
//   flex: 1;
// }
// ._rig{
//  text-align: right;
//   flex: 1;
//   color: #a8a8a8;
//   font-size: 12px;
// }
// ._rig span{
//  margin:0 10px;
//  font-size: 12px;
// }
</style>