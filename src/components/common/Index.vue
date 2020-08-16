<template>
  <div>
    <div class="main">
      <div class="info">
        <img src="../../assets/logo.png" alt="">
        <div class="user">
          <div class="name">{{Data.user.nickname}}</div>
          <div class="tim">2小时前</div>
        </div>
        <div class="btnReply">
          回复
        </div>
      </div>
    <!-- 父评论 -->
    <!-- 判断 数据里面带有parent 才有父评论 有就显示没有就不显示 -->
    <Parent :parentDepth="parentDepth" :parentData="Data.parent" v-if="Data.parent"/>
        <div class="content">
      {{Data.comtent}}

        </div>
      </div>
  </div>
</template>

<script>
import Parent from '../common/parent'
export default {
  components: {
    Parent
  },
  props: ['Data'],
  
  computed:{
    // 楼层的深度 
    parentDepth(){
        // 初始为0 
        let depth = 0;
        // 当前数据 
        let current = this.Data
          // 如果当前数据带有 parent 
        while (current.parent) {
            depth +=1;
            // 将下一层赋值到当前数据中
             current = current.parent
        }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  font-size: 16px;
  border-bottom: 1px solid #e4e4e4;
  padding: 10px;
}
.info{
  padding: 20px 0;
  display: flex;
  align-items: center;
  img{
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  }
  .user {
    flex: 1;
    padding: 0 10px;
    font-size: 14px;
    .time{
      font-size: 12px;
      color: #888;
    }
  }
  .btnReply {
    font-size: 14px;
    color: #666;
  }
}
.content{
  padding-top: 20px;
  font-size: 14px;
}
</style>