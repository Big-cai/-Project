<template>
  <div>
    <!-- 评论内容 -->
    <div class="minCom">
      <div class="info">
          <img src="../../assets/赛亚鼠.gif" alt="">
          <div class="user">
            <div class="name">{{commentData.user.nickname}}</div>
            <div class="time">2小时前</div>
          </div>
          <div class="btnReply" @click="callreply">
            回复
          </div>
      </div>
       <Parent 
       :parentData="commentData.parent" 
       v-if="commentData.parent" 
       @parentCallReply="parentCallReply"
       />
    <div class="content">  {{commentData.content}}</div>
    </div>
  </div>
</template>

<script>
import Parent from './parent'
export default {
  props: ['commentData','labelText'],
  components: {
    Parent
  },
  methods:{
    callreply(){
     this.$emit('callreply',{
       id:this.commentData.id,
       nickname:this.commentData.user.nackname
     })
    },
    parentCallReply(parentInfo){
      this.$emit('callreply',parentInfo)
    }
  }
}
</script>
<style lang="less" scoped>

.minCom {

  max-width: 360px;
  font-size: 20px;
  color: #333;
  padding: 10px;
  margin: 10px;
  border-bottom: 1px solid #e4e4e4;

}
    .info{
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      img{
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 35px;
      }
      .user {
        padding: 0 10px;
        font-size: 14px;
        flex: 1;
        .titme {
          font-size: 12px;
          color: #888;
        }
      }
      .btnReply{
        font-size: 14px;
      }
    }
    .content{
      padding-top: 20px;
      font-size: 14px;
    }
</style>