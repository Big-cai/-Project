<template>
  <div class="box">
    <!-- 主体评论组件 -->
    <Commen :Data="item " v-for="(item,index) in commentList" :key="index" />
  </div>
</template>

<script>
import Commen from '../components/common/Index'
export default {
  components: {
    Commen
  },
  data() {
    return {
      commentList: []
    }
  },
  created(){
    this.$axios({
      url:'/post_comment/31'
    }).then(res=>{
      console.log(res.data);
      this.commentList = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 10px;
}
</style>