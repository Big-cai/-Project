<template>
  <div>
    <div class="list">
      <ul>
        <li @click="handelClick">
          <span class="guanzhu">{{labelText}}</span>
          <span class="huifu">
            {{descText}}
            <i class="iconfont iconjiantou1"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['labelText','descText'],
  methods:{
    handelClick(){
      this.$emit('barClick')
    }
  }
}
</script>

<style lang="less" scoped>
      .list {

  li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #b2b2b2;

    display: flex;
    padding: 0 4.167vw;
    box-sizing: border-box;

    span{
      flex: 1;
    }
  }
}
.huifu{
  text-align: right;
  color: #b2b2b2;
  font-size: 12px;
}
</style>