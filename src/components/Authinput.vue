<template>

     <!-- 登录部分 -->
      <div class="Inpu">
       <form action="" class="frm">
          <input 
      
          :type="type" :placeholder="textPlaceholder"
          v-model="inputVal"
          >  
       </form>
      </div>
</template>

<script>
export default {
  props:['textPlaceholder','type','rule','errMsg'],
  data(){
    return{
      inputVal:'',
      isValid:true,
    }
  },

  watch:{
    inputVal(val){
      console.log(val);
      // const phone=	/^[a-z0-9_-]{3,16}$/
      const regExp=new RegExp(this.rule)
      const errMsg=this.errMsg
      this.isValid=regExp.test(val)

      if(!this.isValid){
        console.log(errMsg);
       
      }
        // 子传父
      this.$emit('valChanged',val)
      // return phone.test(val)
    }
  },
  methods:{
    
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
  border-bottom: 1px solid #757575;
  outline: none;
  font-size: 4.444vw;
  background-color: white;
}
.frm{
  text-align: center;
}

.error{
  border-bottom-color: red;
}
</style>