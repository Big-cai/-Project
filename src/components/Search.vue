<template>
  <div class="bgm">
    <!-- 头部搜索 -->
    <div class="header">
      <!-- 箭头 -->
      <div class="arrow"@click="Goback">
        <span class="iconfont iconjiantou"></span>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" placeholder="通灵兽消失术" v-model="keyword"/>
        <span class="iconfont iconsearch"></span>
      </div>
      <!-- 搜索按钮 -->
      <div class="SearchButton">
        <button @click="search_tz">搜索</button>
      </div>
    </div>
  <div class="content" v-if="results.length==0">
      <!-- 历史记录 -->
    <div class="historical_record" >
      <h4>历史记录</h4>
      <ul class="history list">
        <li v-for="(item,index) in history" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <!-- 热门搜索部分 -->
    <div class="top_search">
      <h4>热门搜索</h4>
      <ul class="holo list">
        <li @click="sendtion(item)" v-for="(item,index) in holo" :key="index">{{item}}</li>
     
      </ul>
    </div>
  </div>
          <!-- 第三 调用渲染 -->
      <div class="results">
          <PostData :postData="item" v-for="item in results" :key="item.id "/>
      </div>
  </div>
</template>

<script>
import PostData from '../components/postitem'
export default {
  components:{
    PostData
  },
  data() {
    return {
      keyword: '',
      results: [],
      // 历史管理数组
      history: [
        
      ],
      holo: ['福寿螺疯狂入侵洱海', 'BLACKPINK舞台', '登月梦想发射计划', '关晓彤', '阿信', '美女', '游戏']
    }
  },
 
  watch: {
   keyword(val){
     if(!val){
        this.results = []
     }
   }
    },
     mounted(){
      const historyStorage = localStorage.getItem('history')
      if(historyStorage){
        this.history=JSON.parse(historyStorage)
      }
    },
    history(){
        localStorage.setItem('history',JSON.stringify(this.history))
    },
  methods: {
    // 第一步 
    search_tz() {
     if(!this.keyword){
       return;
     }
      this.$axios({
        url: '/post_search',
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        if (this.history.indexOf(this.keyword) == -1) {
          this.history.push(this.keyword)
        }
          console.log(res.history)
        this.results=res.data.data
      })
    },
    sendtion(item) {
      this.keyword = item;
      this.search_tz()
    },
    Goback(){
      if(this.results.legnth == 0){
        this.$router.push('/index')
      }else{
        this.keyword = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
// .bgm {
//   height: 691px;
//   background: #ccc;
// }
// 头部总体样式
.header {
  // position: fixed;
  // top: 0;
  width: 100%;
  height: 50px;
  background: #77ddff;
  display: flex;
  align-items: center;
  padding: 0 10px;

  // 箭头图标样式
  .arrow {
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  // 搜索样式
  .search {
    position: relative;
    text-align: center;
    flex: 2;
    input {
      width: 100%;
      height: 35px;
      border-radius: 35px;
      border: none;
      padding-left: 40px;
      font-size: 14px;
      color: green;
    }
    .iconsearch {
      position: absolute;
      left: 20px;
      top: 8px;
    }
  }
  // 搜索按钮样式
  .SearchButton {
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    button {
      // outline: none;
      border: none;
      background: transparent;
    }
  }
}

// 历史记录样式部分
.historical_record {
  padding: 0 10px;
  margin-top: 20px;
  h4 {
    color: #000;
    
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 5px 5px;
      color: green;
    }
  }
}
// 热门搜索部分样式
.top_search {
  padding: 0 10px;
  margin-top: 10px;
  h4 {
    height: 35px;
    line-height: 35px;
    color: #000;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      color: green;
    }
  }
}
</style>