<template>
  <div class="content" v-if="userInfo">
    <!-- 编辑资料 -->
    <div class="Edit">
      <span class="iconfont iconjiantou" @click="$router.push('/personal')"></span>
      <h5 btnText="编辑资料"></h5>
    </div>
    <!-- 头像 -->
    <div class="big">
      <img v-if="userInfo.head_img" :src="$axios.defaults.baseURL + userInfo.head_img" alt />
      <img v-else src="../assets/赛亚鼠.gif" alt />
      <van-uploader :after-read="uploadAvatar"/>
    </div>
    
    <!-- 昵称列表 -->
    <Test btnText="昵称" :nickname="userInfo.nickname" @clicked="isShowNickname=true"></Test>

    <Test @clicked="isShowPassword=true" btnText="密码" nickname="*****"></Test>

    <Test @clicked="isShowGender=true" btnText="性别" :nickname="userInfo.gender==1? '男':'女'"></Test>
    <!-- 弹窗修改昵称 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="editfile({nickname:newNickname})"
    >
      <van-field v-model="newNickname" placeholder="请输入新昵称"></van-field>
    </van-dialog>
    <!-- 弹窗修改密码 -->
    <van-dialog
      v-model="isShowPassword"
      title="修改密码"
      show-cancel-button
      @confirm="editfile({password:newPassword})"
    >
      <van-field v-model="newPassword" placeholder="请输入新密码" type="password"></van-field>
    </van-dialog>
    <!-- 性别 上拉菜单-->
    <van-action-sheet
  v-model="isShowGender"
  :actions="genders"
@select="setGender"
 cancel-text="取消"
/>
  </div>
</template>

<script>
import Test from '../components/Topnav.vue'
export default {
  components: {
    Test
  },
  data() {
    return {
      userInfo: null,
      isShowGender: false,
      isShowNickname: false,
      isShowPassword: false,
      newNickname: '',
      newPassword: '',
      genders:[
        {
          color:'#1989fa',
          name:'男',
          gender:1
        },
        {
          color:'#1989fa',
          name:'女',
          gender:0
        }
      ]
    }
  },
  created() {
    this.loadPage();
  },

  methods: {
    loadPage(){
    //这个钩子函数创建完毕，数据准备完毕，但是dom还没有
       this.$axios({
      url: '/user/' + localStorage.getItem('userId'),
      method: 'get',
     
    }).then(res => {
      const { message, data } = res.data
      if (message == '获取成功') {
        this.userInfo = data
        console.log(this.userInfo)
      }
    })
    }, 
      //  点击确定发送请求
    editfile(newData){
        this.$axios({
        url: '/user_update/' + localStorage.getItem('userId'),
        method: 'post',
        data: newData,
       
      }).then(res => {
        console.log(res.data)
        if (res.data.message == '修改成功') {
         this.loadPage()
        }
      })
    },
    setGender(item){
  const dataObj = {
    gender:item.gender
  }
  this.editfile(dataObj)
  this.isShowGender = false
    },
    uploadAvatar(fileObj){
        // 接收一个参数 fileObj 文件对象
        var formData=new FormData();
        formData.append('file',fileObj.file)

        // 使用ajax 上传图片
      this.$axios({
          url:'/upload',
        method: 'post',
        data:formData,
         
      }).then(res=>{
        console.log(res.data);
        
        const {message,data}=res.data
        if(message=='文件上传成功'){
          this.editfile({
            head_img:data.url
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 0 auto;
  width: 100vw;
}
// 头部样式
.Edit {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #f2f2f2;
  padding: 0 15px;

  h5 {
    text-align: center;
    flex: 1;
  }
}
// 头像样式
.big {
  display: flex;
  align-items: center;
  position: relative;
  height: 38.889vw;
  line-height: 38.889vw;
 

 
}
.big img {
  position: relative;
  // display: block;
  margin: 20px auto;
  width: 19.444vw;
  height: 19.444vw;
  border-radius: 9.722vw;
}
 .van-uploader{
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translate(-50%);
  }
// 列表
</style>