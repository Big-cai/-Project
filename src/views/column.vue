<template>
  <div class="content">
    <!-- 头部标题 -->
   <Nav
    labelText='我的栏目'
   />
   <!-- 栏目 -->
    <div class="lan">
      <span class="del">点击删除一下频道</span>
      <ul>
        <li>
          <div class="item item-del" 
          v-for="(item,index) in enabela" :key="item.id"
          @click="disabledel(index)"
          >{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="lan">
      <span class="del">点击添加一下频道</span>
      <ul>
        <li>
          <div class="item item-del"
            v-for="(item,index) in disadel" :key="item.id"
            @click="Add_columns(index)"
          >{{item.name}}</div>
         
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from '../components/nav'
export default {
  components:{
      Nav
  },
  data() {
    return {
      enabela: [],
      disadel:[]
    }
  },
  created() {
    // 渲染栏目数据
    this.$axios({
      url: '/category'
    }).then(res => {
      console.log(res.data)
      this.enabela = res.data.data
    })
  },
  methods:{
    // 点击删除
    disabledel(index){
        // 3.判断当删除只剩下最后一个时，就不能删除了
      if(this.enabela.length===1){
        return;
      }
      // 1.当点击删除栏目的按钮，就把这个按钮栏目移除到另一个数组中
      this.disadel.push(this.enabela[index])
      // 2.当点击这个删除元素后，让他在原来的数组消失
      this.enabela.splice(index,1)
    },
    Add_columns(index){
      // 添加之后把当前添加的元素从数组移除到另一个数组
        this.enabela.push(this.disadel[index])
        // 删除在原来数组中的元素
        this.disadel.splice(index,1)
  
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  box-sizing: border-box;
}
.box {
  width: 100vw;
  height: 13.889vw;
  background-color: #c9c6c5;
  display: flex;
  align-items: center;

  .jiantou{
    flex: 1;
  }

  .title{
    flex: 1;
  }

}
.del {
  display: inline-block;
  height: 8.333vw;
  line-height: 8.333vw;
  font-size: 3.333vw;
  color: #797979;
  padding: 0 4.167vw;
}

ul {
  width: 100vw;

  li {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4.167vw;

    .item {
      text-align: center;
      width: 25%;
      height: 100%;
      margin: 2.778vw 1.389vw;
    }
    .item-del {
      width: 19.444vw;
      height: 9.722vw;
      line-height: 9.722vw;
      border: 1px solid #e28892;
    }
  }
}
</style>