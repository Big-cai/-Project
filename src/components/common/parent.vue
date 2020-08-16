<template>
  <div>
      <Parent :parentDepth='parentDepth - 1' :parentData="parentData.parent"  v-if="parentData.parent"/>
    <div class="parent">
        <div class="info">
          <div class="user">
           {{parentDepth}} {{parentData.user.nickname}}
            2  小时前
          </div>
          <div class="bntReply">
            回复
          </div>
        </div>

        <div class="content">
      {{parentData.comtent}}

        </div>
    </div>
  </div>
</template>

<script>
export default {
  // 递归渲染楼层组件,显示楼层内容
  //   1.给这个组件命名一个 name 
  //   2.有了 name 就可以使用 这个name 作为标签名 在自己模板当中渲染自己。
  //   3.这个组件所有的参数应该是一样的
  //   4.必须有限制条件，不能无止境死循环
  name:'Parent',
  props:['parentData','parentDepth']
}
</script>

<style lang="less" scoped>
  .parent{
    font-size: 14px;
    color: #666;
    padding: 10px;
    border: 1px solid skyblue;
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