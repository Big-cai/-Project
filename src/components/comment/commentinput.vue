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
          :placeholder="palceholderText"
        ></textarea>
        <div class="btnsend" @click="send">发送</div>
      </div>
    </div>

    <!-- 未激活 -->
    <!-- <div class="footr" v-if="!isShowTextarea">
      <div class="coninput">
        <input type="text" @focus="ShowTextarea" :value="content" :placeholder="palceholderText" />
        <span class="iconfont iconpinglun- fon"></span>
        <span class="iconfont iconshoucang fon"
        @click="chanSend"
        
        ></span>
        <span class="iconfont iconfenxiang fon"></span>
      </div>
      <span class="xinxi">1024</span>
    </div> -->
      <div class="footer" v-if="!isShowTextarea">
        <input type="text" :value="content" @focus="ShowTextarea" placeholder="评论">
        <button>发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTextarea: false,
      content: '',
    }
  },
  created(){{
   
    
  }},
  props: ['parentInfo'],
  computed: {
    palceholderText() {
      if (this.parentInfo.nickname) {
        return "回复 @ " + this.parentInfo.nickname
        // console.log(this.parentInfo.nickname);
        
      } else {
        return '写评论'
      }
    }
  },
 
  methods: {
    ShowTextarea() {
      // 将输入框改为 true 让输入框弹出
      this.isShowTextarea = true
  
      this.$nextTick(() => {
        this.$refs.textarea.focus()
      })
    },
    hideTextarea() {
      setTimeout(() => {
        this.isShowTextarea = false
      }, 100)
    },
    send() {
      console.log(this.$route.params.id)
      console.log(this.content)
      let data = {
        content: this.content
      }
      if (this.parentInfo.id) {
        data.parent_id = this.parentInfo.id
      }
      this.$axios({
        url: '/post_comment/' + this.$route.params.id,
        method: 'post',
        data
      }).then(res => {
        console.log(res.data)
        if (res.data.message == '评论发布成功') {
          this.$emit('reloadComment')
          this.content = ''
        }
      })
    },
    // 收藏部分 
    chanSend(){ 
      this.$axios({
        url:'/post_star/'+ this.$route.params.id ,
        method:'GET',
        data:{
          id:''
        },
      }).then(res=>{
        console.log(res.data);
        
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
  line-height: 50px;
  padding: 0 16px;
  background: #ccc;

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
      background-color: white;
    }
    .commentErapper{
      height: 50px;
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
    left: 215px;
    bottom: 28px;
    text-align: center;
    width: 28px;
    height: 13px;
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
  background: #ccc;
  textarea {
    height: 50px;
    flex: 1;
    background-color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 12px;
  }
  .btnsend {
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
.clas{
  background: red;
}

// 新版
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.889vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e7eaed;
  box-sizing: border-box;
  input{
    height: 30px;
    border-radius: 15px;
    border: 1px solid #000;
    padding-left: 20px;
  }
  button{
    width: 60px;
    background: #129646;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    height: 30px;
    line-height: 30px;
    
  }
}
</style>