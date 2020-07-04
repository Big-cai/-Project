<template>
    <div class="comments">
      <!-- 头部 -->
        <div class="nav">
          <span class="iconfont iconjiantou" @click="$router.back()"></span>
          <span>我的跟帖</span>
        </div>

        <!-- 跟帖部分 -->
        <div class="comtie" v-for="item in commentList" :key="item.id">
          <!-- 时间显示部分 -->
          <div class="dat" >
            <span>{{item.create_date.split('T')[0]}}</span>
          </div>
           <div class="new2" v-if="item.parent">
             <div class="box">
               <span>
              回复：{{item.parent.user.nickname}}
            </span>
            <span class="hf">
              <p>{{item.parent.content}}</p>
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
                原文：{阿信分享《说好不哭》幕后故事：只听...
            </span>
          </div>
        </div>
         <div class="gengduo">
            <span>更多跟贴
              <span class="iconfont iconjiantou1"></span>
              <span class="iconfont iconjiantou1"></span>
            </span>
          </div>
    </div>
</template>

<script>
import Comment from '../components/comment/main'
import CommentInput from '../components/comment/commentinput'
export default {
  components:{
    Comment,
    CommentInput
  },
  data(){
    return{
      commentList:[],
      commentInfo:{}
    }
  },
  created(){
    this.$axios({
      url:'/user_comments',
    }).then(res=>{
      console.log(res.data);
      this.commentList=res.data.data
    })
  },
  methods:{
       newhm(commentInfo){
      // 获取到id 存起来，再交给 输入框
      this.commentInfo=commentInfo;
        console.log('获取到了该回复的id');
        this.$refs.commentput.ShowTextarea()
    },
  }
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
    align-items: center;
    
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