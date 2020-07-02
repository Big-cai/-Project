<template>
  <div>
   
    <Comment :commentData="comment" v-for="(comment,index) in commentList" :key="index" />
  </div>
</template>

<script>
import Comment from '../../components/comment/main'
import Nav from '../../components/nav'
export default {
  components: {
    Comment,
    Nav
  },
  data() {
    return {
      commentList: []
    }
  },
  created(){
    this.$axios({
      url:'/post_comment/1'
    }).then(res=>{
      console.log(res.data);
      this.commentList=res.data.data
    })
  }
}
</script>

<style>
</style>