<template>
  <div class="comten">
    <div class="commentErapper" v-if="isShowTextarea">
      <div class="enable">
        <!-- 已激活 -->
        <textarea 
        rows="3" 
        ref="textarea" 
        @blur="hideTextarea"
        v-model="content"
        ></textarea>
         <div class="btnsend" @click="send">发送</div>
      </div>
    </div>

    <!-- 未激活 -->
    <div class="footr" v-if="!isShowTextarea">
      <div class="coninput">
        <input type="text" placeholder="写跟帖" @focus="ShowTextarea" :value="content"/>
        <span class="iconfont iconpinglun- fon"></span>
        <span class="iconfont iconshoucang fon"></span>
        <span class="iconfont iconfenxiang fon"></span>
      </div>
      <span class="xinxi">1024</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShowTextarea:false,
      content:''
    }
  },
  methods:{
    ShowTextarea(){
      // 江苏局改为 true 让输入框弹出
      this.isShowTextarea=true;
      // 因为vue 的显示是根据生命周期循环
      // 如果数据发生变化，就会触发代码执行，然后更新页面
      // 跟jq 或原生，执行完每行代码结果马上显示的逻辑不通
      // vue 实现执行完所有代码，再把页面更新的结果显示出来
      // 这里需要等这次页面更新完毕，下一步的时候才开始聚焦
      // vue 提供了一个函数，this.$nextTick()
      this.$nextTick(()=>{
        this.$refs.textarea.focus()
      })
    },
    hideTextarea(){
        setTimeout(() => {
          
          this.isShowTextarea=false
        }, 100);
      
    },
    send(){
      console.log(this.$route.params.id);
      console.log(this.content);
      
        this.$axios({
            url:'/post_comment/' +this.$route.params.id,
            method:'post',
            data:{
              content:this.content
            }
        }).then(res=>{
          console.log(res.data);
          if(res.data.message=='评论发布成功'){
            this.content=''
          }
        })
    }
  }
}
</script>
<style lang="less" scoped>

.footr {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 0 16px;
 
  .coninput {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      padding: 0 20px;
      width: 180px;
      height: 30px;
      border-radius: 15px;
      outline: none;
      border: none;
      font-size: 12px;
      background-color: #d7d7d7;
    }
    .fon {
      font-size: 22px;
    }
    .iconpinglun- {
      position: relative;
    }
  }
}
.xinxi {
  position: fixed;
  left: 228px;
  bottom: 38px;
  text-align: center;
  width: 35px;
  height: 15px;
  line-height: 15px;
  border-radius: 17px;
  background: red;
  color: white;
  font-size: 12px;
}

.enable {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2.778vw;
  box-sizing: border-box;
  display: flex;
 align-items: flex-end;
  textarea{
    flex: 1;
    background-color: #d7d7d7;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 12px;
  }
  .btnsend{
    height: 26px;
    line-height: 26px;
    border-radius: 16px;
    font-size: 12px;
    background-color: red;
    color: white;
    padding: 0 14px;
    margin: 0 10px;
    }
}
</style>