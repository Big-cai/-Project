<template>
    <div class="content">
      <!-- 编辑资料 -->
        <div class="Edit">
          <span class="iconfont iconjiantou"></span>
          <h5>编辑资料</h5>
        </div>
        <!-- 头像 -->
        <div class="big">
          <img src="../assets/赛亚鼠.gif" alt="">
        </div>
        <!-- 昵称列表 -->
        <ul>
          <li>
            <span class="nik">昵称</span>
            <span class="biy">火星网友
              <i class="iconfont iconjiantou1"></i>
            </span>
          </li>
          <li>
            <span class="nik">密码</span>
            <span class="biy">******
              <i class="iconfont iconjiantou1"></i>
            </span>
          </li>
          <li>
            <span class="nik">性别</span>
            <span class="biy">男
              <i class="iconfont iconjiantou1"></i>
            </span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content{
  margin: 0 auto;
  width: 100vw;
  
}
// 头部样式
  .Edit{
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #f2f2f2;
    padding: 0 15px;
    
    h5{
      text-align: center;
      flex: 1;
    }
  }
  // 头像样式
  .big{
    height: 19.444vw;
  }
  .big img{
    display: block;
    margin: 20px auto;
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 9.722vw;
  }
// 列表
ul {
  padding: 0 4.167vw;
 margin-top:5.556vw;

  li {
    height: 60px;
    line-height: 60px;
     display: flex;
     border-bottom: 1px solid #a0a0a0;


    .nik {
      flex: 2;
    }
    .biy{
      text-align: right;
      flex: 1;
      font-size: 14px;
      color: #a0a0a0;
    }

  }
}
</style>