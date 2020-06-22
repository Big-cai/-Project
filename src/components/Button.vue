<template>
  <div class="btn">
        <button @click="hanClick" class="fr">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  props:['btnText'],
    methods:{
      hanClick(){
        console.log('按钮子组件被处罚');
        this.$emit('clicked')

      } 
    },
    mounted(){
      this.$axios({
        url:'/login',
        data:{
          username:'',
          password:''
        },
        // 请求方式
        mounted:'POST '
      }).then((res)=>{
        console.log(res);
        
      })
    }
}
</script>
<style lang="less" scoped>
    .btn{
  width: 88.333vw;
  height: 13.333vw;
}
.btn button {
  width: 88.333vw;
  height: 13.333vw;
  border-radius: 6.944vw;
  outline: none;
  background-color: #cc3300;
  color: #f8e4dd;
  border: 0;
  font-size: 4.444vw;
  cursor: pointer;
  margin: 6.944vw;
  // -webkit-tap-highlight-color: transparent; 
}
</style>