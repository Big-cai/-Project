<template>
  <div>
    <div class="profile">
      <!-- 头部部分 -->
      <!-- 箭头0 -->
      <div class="arrow" @click="$router.push('/index')">
        <span class="iconfont iconjiantou jian"></span>
      </div>

      <div class="let" v-if="userInfo">
        <img v-if="userInfo.head_img" :src="'http://127.0.0.1:3000'+userInfo.head_img" alt />
        <img v-else src="../assets/赛亚鼠.gif" alt />
      </div>
      <!-- 中间部分 -->
      <div class="info">
        <span class="top">
          <span class="iconfont iconxingbienan nan" v-if="userInfo.gender==1"></span>
          <span class="iconfont iconxingbienv nv" v-else></span>
          {{userInfo.nickname}}
        </span>
        <span class="but">{{(userInfo.create_date).split('T')[0]}}</span>
      </div>
      <!-- 右边部分 -->
    </div>

    <Gegen labelText="我的关注" descText="关注的用户" @barClick="Focus"></Gegen>

    <Gegen labelText="我的跟帖" descText="跟帖/回复" @barClick="$router.push('/comments')"></Gegen>

    <Gegen labelText="我的收藏" descText="文章/视频" @barClick="$router.push('/collection')"></Gegen>

    <Gegen labelText="编辑资料" descText @barClick="rouzhuan"></Gegen>

    <Gegen labelText="退出登录" descText="注销用户" @barClick="logout"></Gegen>
  </div>
</template>

<script>
import Gegen from '../components/geren'
export default {
  components: {
    Gegen
  },
  data() {
    return {
      userInfo: {
        create_date: ''
      }
    }
  },
  mounted() {
    this.$axios({
      url: 'http://127.0.0.1:3000/user/' + localStorage.getItem('userId'),
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res.data)
      const { message, data } = res.data
      if (message == '获取成功') {
        this.userInfo = data
        console.log(this.userInfo)
      } else {
        this.$toast.fail('获取失败')
      }
    })
  },
  methods: {
    logout() {
      // 清理数据
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      // 2.跳转
      this.$router.replace('/login')
    },
    rouzhuan() {
      this.$router.replace('/edit')
    },
    Focus() {
      this.$router.replace('/focus')
    }
  }
}
</script>

<style lang="less" scoped>
.profile{
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #cacaca;
  height: 100px;

.info{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  flex: 2;
}
.arrow{
  flex: 1;
  width: 30px;
  height: 100%;
  margin: 20px 0 0 10px;
  box-sizing: border-box;
}
  img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 10px;
    
  }
 
}
</style>