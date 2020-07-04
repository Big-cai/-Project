<template>
  <div class="box">
    <div class="normalWrapper" v-if="postDetail.type==1">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <div class="btnnew">
          <span class="iconfont iconnew"></span>
        </div>
        <div 
          class="btnFollow"
          :class="{highlight:!postDetail.has_follow}"
         @click="handclick"
        >
        {{postDetail.has_follow?'已关注':'关注'}}
        
        </div>
      </div>
      <div class="title">{{postDetail.title}}</div>
      <div class="info">
        {{postDetail.user.nickname}}
        {{postDetail.create_date.split('T')[0]}}
      </div>
      <div class="mainContent" v-html="postDetail.content"></div>
    </div>
    <div class="videoWrapper" v-if="postDetail.type==2">
      <video
        class="player"
        controls
        poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
        src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
      ></video>
      <div class="info">
        <div class="user">
          <img src="../assets/赛亚鼠.gif" alt />
          {{postDetail.user.nickname}}
        </div>
        <div class="btnFollw">已关注</div>
      </div>
      <div class="title">{{postDetail.title}}</div>
    </div>
    <div class="buttonsWrapper">
      <div class="btn btndianzhan" @click="hangou">
        <span class="iconfont icondianzan"></span>{{postDetail.like_length}}
      </div>
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span>
      </div>
    </div>
   
      
     <Comment @callreply="newhm" :commentData="item" v-for="item in commentList" :key="item.id"/>
      <div class="gentie" @click="$router.push('/test/'+$route.params.id)">
      更多跟帖
      <span class="iconfont  iconjiantou1 gtie"></span>
      <span class="iconfont  iconjiantou1 gtie"></span>
    </div>
    <CommentInput @reloadComment="loadComment" ref="commentInput" :parentInfo="commentInfo"/>
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
  data() {
    return {
      postDetail: {},
      commentList:[],
      commentInfo:{}
    }
  },
  created() {
    this.$axios({
      url: '/post/' + this.$route.params.id
    }).then(res => {
      // 将结果数据存到 data 中
      this.postDetail = res.data.data
    })

   this.loadComment();
  },
  methods:{
    handclick(){
      console.log('555');
      if(this.postDetail.has_follow){
        // 取消关注
        // 发送请求
        this.$axios({
          url:'/user_unfollow/' + this.postDetail.user.id
        }).then(res=>{
          console.log(res.data);
           if (res.data.message === '取消关注成功') {
            this.postDetail.has_follow = false
          }
        })
      }else {
        // 关注
        this.$axios({
          url: '/user_follows/' + this.postDetail.user.id
        }).then(res=>{
          console.log(res.data);
          // 3. 处理成功状况
          if (res.data.message === '关注成功') {
            this.postDetail.has_follow = true;
          }
          
        })
      }
    },
    hangou(){
        this.$axios({
          url:'/post_like/' + this.postDetail.id
        }).then(res=>{
          if(res.data.message === "点赞成功"){
            this.postDetail.like_length += 1
          }else{
            this.postDetail.like_length -= 1
          }
        })
    },
      newhm(commentInfo){
      // 获取到id 存起来，再交给 输入框
      this.commentInfo=commentInfo;
        console.log('获取到了该回复的id');
        this.$refs.commentInput.ShowTextarea()
    },
      loadComment(){
         // 获取文章评论列表
    this.$axios({
      url:'/post_comment/' + this.$route.params.id
    }).then(res=>{
      
     const commentList = res.data.data;
     if(commentList.length > 3){
       commentList.length = 3;
     }
      this.commentList=commentList
    })
    },
  }
  
}
</script>

<style lang="less" scoped>
.normalWrapper {
  padding: 0 16px;
  box-sizing: border-box;
  .header {
    display: flex;
    align-items: center;

    .btnnew {
      flex: 1;
      .iconnew {
        font-size: 54px;
      }
    }
    .btnFollow {
      border: 1px solid #e4e4e4;
      padding: 4px 10px;
      font-size: 12px;
      border-radius: 10px;
      background-color: #e4e4e4;
      &.highlight{
        background-color: red;
        border-color: red;
        color: white;
      }
    }
  }
}
.title {
  font-size: 14px;
  font-weight: bold;
}
.info {
  font-size: 14px;
  color: #bbb;
  padding: 10px 0 16px;
}
/deep/ img {
  width: 100%;
}
/deep/ .content {
  width: 100%;
}
.buttonsWrapper {
  display: flex;
  justify-content: space-around;
  padding: 40px 0 16px;
  align-items: center;
  border-bottom: 3px solid #e4e4e4;
  
  .btn {
    border: 1px solid;
    font-size: 14px;
    height: 27px;
    line-height: 25px;
    padding: 0 16px;
    .dz{
      background-color: red;
      color: white;
    }
    border-radius: 16px;
    .icondianzan{
    margin-right: 4px;
  
    }

    .iconweixin {
      color: #129646;
    }
  }
}
.videoWrapper {
  .player {
    width: 100vw;
  }
  .info {
    padding: 0 16px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    font-size: 14px;
    .user {
      display: flex;
      align-content: center;
      
    }
    .btnFollw {
      border: 1px solid #e4e4e4;
      padding: 4px 10px;
      font-size: 12px;
      border-radius: 10px;
      color: #241b2f;
      background-color: #e4e4e4;
    }
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .title {
    padding: 0 16px;
    font-size: 14px;
  }
}
.gentie {
  display: flex;
  margin: 40px 0 80px;
  
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #bbb;
  .gtie{
    margin-right: -10px;
  }
}
</style>