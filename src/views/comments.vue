<template>
    <div class="comments">
      <!-- 头部 -->
        <div class="nav">
          <span class="iconfont iconjiantou" ></span>
          <span>我的跟帖</span>
        </div>

        <!-- 跟帖部分 -->
        <div class="comtie">
          <!-- 时间显示部分 -->
          <div class="dat">
            <span>2049-10-5</span>
            <span>10:25</span>
          </div>
          <!-- 内容 -->
          <div class="new1">
            <span>
              啊信是张信哲吗？张信哲是不是的张学友弟弟？
            </span>
          </div>
          <!-- 原文、 -->
          <div class="yannew">
            <span>
              原文：阿信分享《说好不哭》幕后故事：只听...
            </span>
            <span class="iconfont iconjiantou1"></span>
          </div>

          <div class="dat">
            <span>2049-10-5</span>
            <span>10:25</span>
          </div>
           <div class="new2">
             <div class="box">
               <span>
              回复：火星彩票研究院
            </span>
            <span class="hf">
              <p>啊信是张信哲吗？张信哲是不是的张学友弟弟？</p>
            </span>
             </div>
          </div>
         
          <div class="da">
            <span>
              答:不是
            </span>
          </div>
          <div class="yaun">
            <span>
                原文：阿信分享《说好不哭》幕后故事：只听...
            </span>
          </div>

          <div class="gengduo">
            <span>更多贴吧
              <span class="iconfont iconjiantou1"></span>
              <span class="iconfont iconjiantou1"></span>
            </span>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .comments{
    max-width: 100vw;
    margin: 0 auto;
  }
  .nav{
    height: 50px;
    background-color: #e4e4e4;
    padding: 0 4.167vw;
    display: flex;

    
    span:nth-child(2){
      flex: 1;
      text-align: center;
    }
  }

  .comtie{
    margin-top: 5.556vw;
    padding: 0 4.167vw;
  }
  .dat{
    height: 50px;
    line-height: 50px;
    color: #a0a0a0;

    span{
      margin-right: 2.778vw;
    }
  }
  .new1{
    height: 50px;
    line-height: 50px;
    font-size: 4.167vw;
  }
  .yannew{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d7d7d7;
    font-size: 12px;
    color:#898989;
    display: flex;

    span:nth-child(1){
      flex: 1;
    }
    span:nth-child(2){
      color: #898989;
    }
  }
  .new2{
    color: #929292;
    font-size: 12px;
  }
  .hf{
    color: #929292;
  }
  .da{
    height: 40px;
    line-height: 40px;
   color: 3.889vw;
  }
  .yaun{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #d7d7d7;
    font-size: 12px;
    color:#898989;
  }
  .box{
    height: 70px;
    padding: 0 10px;
    background-color: #e4e4e4;
    span {
      display: inline-block;
     
    }
    span:nth-child(1){
       height: 35px;
      line-height: 45px;
    }
    span:nth-child(2){
       height: 35px;
      line-height: 25px;
      font-size: 3.889vw;
    }
  }

  .gengduo{
    height:25vw;
    line-height: 25vw;
    text-align: center;
    font-size: 3.333vw;
    color: #969696;
    span:nth-child(1) {
      margin-right: -3.056vw;
    }
  }
</style>