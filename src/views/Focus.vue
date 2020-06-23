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
      <li>
        <div class="touxiagn">
          <img src="../assets/赛亚鼠.gif" alt />
        </div>
        <div class="conew">
          <span class="conw">火星新闻播报</span>
          <span class="but">2019-10-24</span>
        </div>
        <div class="rigi">
          <a href="#">取消关注</a>
        </div>
      </li>
       <li>
        <div class="touxiagn">
          <img src="../assets/赛亚鼠.gif" alt />
        </div>
        <div class="conew">
          <span class="conw">火星新闻播报</span>
          <span class="but">2019-10-24</span>
        </div>
        <div class="rigi">
          <a href="#">取消关注</a>
        </div>
      </li>
       <li>
        <div class="touxiagn">
          <img src="../assets/赛亚鼠.gif" alt />
        </div>
        <div class="conew">
          <span class="conw">火星新闻播报</span>
          <span class="but">2019-10-24</span>
        </div>
        <div class="rigi">
          <a href="#">取消关注</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  mounted(){
    this.$axios({
      url:'http://127.0.0.1:3000/user/'+localStorage.getItem('userId'),
      method:'get',
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
    }).then(res=>{
      console.log(res.data);
      
    })
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
  height: 16.667vw;
  line-height: 16.667vw;
  border-bottom: 2px solid #f2f2f2;
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