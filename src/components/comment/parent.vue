<template>
  <div>
    <Parent :parentData="parentData.parent" v-if="parentData.parent"/>
    <div class="parentCom">
      <div class="info">
        <div class="user">
          {{parentData.user.nickname}}
          2小时前
        </div>
        <div class="btnReply">
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
  props: ['parentData']
}
</script>

<style lang="less" scoped>
  .parentCom{
    font-size: 14px;
    color: #888;
    padding: 10px;
    margin: 10px;
    border: 1px solid #e4e4e4;
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