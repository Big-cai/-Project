<template>

     <!-- 登录部分 -->
      <div class="Inpu">
       <form action="" class="frm">
          <input 
          
          :maxlength="maxlength"
          :type="type" :placeholder="textPlaceholder"
          v-model="inputVal"
          @blur="showTop"
          >  
       </form>
      </div>
</template>

<script>
export default {
  props:['textPlaceholder','type','rule','errMsg','maxlength'],
  data(){
    return{
      inputVal:'',
      isValid:true ,
    }
  },

  watch:{
    inputVal(val){
      console.log(val);
      // 1.利用接收回来的字符串创建一个正则对象
      const regExp=new RegExp(this.rule)
      const errMsg=this.errMsg
      this.isValid=regExp.test(val)
      if(!this.isValid){
        console.log(errMsg);

        
      }
        // 子传父
      this.$emit('valChanged',val)
     
    }
  },
  methods:{
    showTop(){
      if(!this.isValid){
       this.$toast(this.errMsg)
      
       
      }

}
  }
}
</script>

<style lang="less" scoped>
.Inpu input{
  width: 88.333vw;
  height: 11.111vw;
  margin-bottom: 4.167vw;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ;
  outline: none;
  font-size: 4.444vw;
  background-color: white;
}
.frm{
  text-align: center;
}

</style>