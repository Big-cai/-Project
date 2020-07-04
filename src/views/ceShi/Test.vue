<template>
  <div>
    <Nav labelText="更多跟帖"/>
    <Comment 
    @callreply="callreply"
    :commentData="item" 
    v-for="item in commentList" :key="item.id" 
    />
  
  <commentinput
  @reloadComment="loadComment" ref="commentInput" :parentInfo="commentInput"
  />
  </div>
</template>

<script>
import CommentInput from '../../components/comment/commentinput'
import Comment from '../../components/comment/main'
import Nav from '../../components/nav'
import commentinput from '../../components/comment/commentinput'
export default {
  props:['labelText'],
  components: {
    Comment,
    commentinput,
    Nav
  },
  data() {
    return {
      commentList: [],
      commentInput:{}
  
    }
  },
  created(){
     this.loadComment();
  },
  methods:{
  callreply(commentInfo){
      // 获取到id 存起来，再交给 输入框
      this.commentInfo=commentInfo;
        console.log('获取到了该回复的id');
        this.$refs.commentInput.ShowTextarea()
    },
    loadComment(){
       this.$axios({
      url:'/post_comment/1'
    }).then(res=>{
      console.log(res.data);
      this.commentList=res.data.data
    })
    }
  }
}
</script>
<style lang="less" scoped>

</style>