<template>
    <div class="content">
      <!-- 头部标题 -->
        <div class="box">
            <span class="iconfont iconjiantou"></span>
          <h5>
            栏目管理</h5>
        </div>
       <div class="lan">
          <span class="del">点击删除一下频道</span>
        <ul>
          <li>
            <div class="item  item-del">推荐</div>
            <div class="item  item-del">热点</div>
            <div class="item  item-del">娱乐</div>
            <div class="item  item-del">科技</div>
            <div class="item  item-del">汽车</div>
            <div class="item  item-del">财经</div>
            <div class="item  item-del">军事</div>
            <div class="item  item-del">国际</div>
            <div class="item  item-del">时尚</div>
            <div class="item  item-del">历史</div>
            <div class="item  item-del">故事</div>
          </li>
        </ul>
       </div>
         <div class="lan">
          <span class="del">点击添加一下频道</span>
        <ul>
          <li>
            <div class="item  item-del">社会</div>
            <div class="item  item-del">体育</div>
            <div class="item  item-del">游戏</div>
            <div class="item  item-del">旅游</div>
            <div class="item  item-del">探索</div>
            <div class="item  item-del">美食</div>
            <div class="item  item-del">育儿</div>
            <div class="item  item-del">养生</div>
            <div class="item  item-del">美文</div>
           
          
          </li>
        </ul>
        
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content{
  max-width: 100vw;
}
  .box{
    position: relative;
      width: 360px;
      height: 50px;
      line-height: 50px;
      background-color: #c9c6c5;
      display: flex;
     
      span {
        position: absolute;
        left: 4.167vw;
        top: 0;
      }

      h5{
        flex: 1;
         text-align: center;
      }
   
  }
  .del{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #797979;
    padding: 0 4.167vw;
  }

  ul {
    width: 100vw;

    li {
      width: 100%;
      display: flex;   
      flex-wrap: wrap;
      padding: 0 15px;
   
      .item {
        text-align: center;
        width: 25%;
        height: 100%;
        margin: 10px 5px;
       
      }
      .item-del{
          width: 70px;
          height: 35px;
          line-height: 35px;
          border: 1px solid #d5d5d5;
      }
    }
  }
</style>