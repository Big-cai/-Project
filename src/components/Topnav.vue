<template>
  <div>
      <!-- 昵称列表 -->
        <ul>
          <li @click="handelClick">
            <span class="nik">{{btnText}}</span>
            <span class="biy">{{nickname}}
              <i class="iconfont iconjiantou1"></i>
            </span>
          </li>
        </ul>
        <!-- 这里是专门放弹框的位置 -->
  </div>
</template>

<script>
export default {
props:['btnText','nickname',],
  data(){
    return{
      // isShowNickname:false
    }
  },
  methods:{
    handelClick(){
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="less" scoped>
    // 列表
ul {
  padding: 0 4.167vw;
 margin-top:5.556vw;

  li {
    height: 50px;
    line-height: 50px;
     display: flex;
     border-bottom: 1px solid #a0c5e8;


    .nik {
      flex: 1;
      color: #a0c5e8;
    }
    .biy{
      text-align: right;
      flex: 1;
      font-size: 12px;
      color: #a0c5e8;
    }

  }
}
</style>