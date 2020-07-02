<template>
  <!-- 我的关注 -->
  <div class="myFocus" @clicked="hancj">
    <div class="jiantou">
      <span class="iconfont iconjiantou" @click="$router.back()"></span>
    </div>
    <div class="cous">
      <h5>{{labelText}}</h5>
    </div>
    <div class="emppty"></div>
  </div>
</template>

<script>
export default {
props: ['labelText'],
  methods:{
    hancj(){
        this.$emit('hancj')
    }
  }
}
</script>

<style lang="less" scoped>
.myFocus {
  width: 100vw;
  height: 16.667vw;
  line-height: 16.667vw;
  background-color: #e6e6e6;
  display: flex;

  .jiantou {
    flex: 1;
  }
  .jiantou span {
    padding: 0 15px;
  }
  .cous {
    text-align: center;
    flex: 1;
  }
  .emppty {
    flex: 1;
  }
}
</style>