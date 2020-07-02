<template>
  <div class="contetn">
    <!-- 头部 -->
    <Nav labelText="我的收藏" />
    <!-- 收藏列表 -->
 
    <PostItem :postData="item" v-for="item in postList" :key="item.id"/>
  </div>
</template>

<script>
import Nav from '../components/nav'
import PostItem from '../components/postitem'
export default {

  components: {
    Nav,
    PostItem
  },
  data(){
    return{
      postList:[]
    }
  },
  created(){
    this.$axios({
      url:'/user_star',
      method:'get'
    }).then(res=>{
      console.log(res.data);
      this.postList=res.data.data

    })
  }
}
</script>
<style lang="less" scoped>
.contetn {
  max-width: 100vw;
  margin: 0 auto;
}

.box {
  padding: 0 4.167vw;
  height: 50px;
  line-height: 50px;
  background-color: pink;
  display: flex;

  span {
    flex: 1;
  }
  h5 {
    text-align: center;
    flex: 2;
  }
}
ul {
  margin-top: 5.556vw;

  li {
    margin-top: 5.556vw;
    padding: 0 15px;
    border-bottom: 1px solid #e4e4e4;
  }
  .shibao {
    display: block;
    width: 100vw;
    height: 55px;
    line-height: 55px;
    font-size: 3.333vw;
    color: #868686;
  }
}

.tu {
  display: flex;
}
.tu img {
  width: 31.111vw;
  flex: 1;
  margin-top: 5px;
}
.tu img:nth-child(2) {
  margin: 5px 1px 0;
}
</style>