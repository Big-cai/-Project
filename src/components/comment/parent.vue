<template>
  <div>
    <div class="parentCom">
    <Parent 
    :parentData="parentData.parent" 
    v-if="parentData.parent"
    @parentCallReply="diguiCallReply"
    />
      <div class="info">
        <div class="user">
          {{parentData.user.nickname}}
          2小时前
        </div>
        <div class="btnReply" @click="parentCallReply">
          回复
        </div>
      </div>
     <div class="content">
        {{parentData.content}}
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Parent',
  props: ['parentData'],
  methods:{
    parentCallReply(){
      // 往父组件传id
      this.$emit('parentCallReply',{
        id:this.parentData.id,
        nickname:this.parentData.user.nickname
      })
    },
    diguiCallReply(parentInfo){
      this.$emit('parentCallReply',parentInfo)
    }
  }
}
</script>

<style lang="less" scoped>
  .parentCom{
    font-size: 14px;
    color: #888;
    padding: 5px;
   
    border: 1px solid pink;
  }
  .info{
    display: flex;
    justify-content: space-between;

    .btnReply{
      font-size: 12px;
    }
  }
  .content{
    padding: 10px 0;
  }
</style>