<template>
  <div class="constent">
    <!-- 头部搜索部分 -->
    <Home />

    <!-- 头部菜单 -->
    <van-tabs v-model="active"  sticky swipeable>
      <van-tab 
      :title="category.name"
       v-for="category in categoriesList"
        :key="category.id">
        <van-list
       v-model="category.loading"
       :finished="category.finished"
       @load="loadMorePost"
       :immediate-check="false"
       finished-text="到底了~别再拉了"
        >
        <PostItem 
        :postData="post" 
        v-for="post in category.postList" 
        :key="post.id"></PostItem>

        </van-list>
      </van-tab>
    </van-tabs>
    <!-- 新闻部分 -->
   
  </div>
</template>

<script>
import Home from '../components/Home.vue'
import PostItem from '../components/postitem.vue'
export default {
  components: {
    Home,
    PostItem
  },
  data() {
    return {
      categoriesList: [],
      postList: [],
      active: 0
    }
  },
  created() {
    // 页面创建，获取栏目
    this.getCategories()
  },
  computed: {
    categoryId() {
      const currentCategory = this.categoriesList[this.active]
      // 从中获取id
      return currentCategory.id
    }
  },
  watch: {
    active() {
      const currentCategory=this.categoriesList[this.active]
      if(currentCategory.postList.length==0){

        this.getPost()
      }
    }
  },
  methods: {
    
    getCategories() {
        const enabelaList=localStorage.getItem('enabelaList')
        if(enabelaList){
          const res={
            data:{
                data:JSON.parse(enabelaList) 
            }
          }
           const newDate = res.data.data.map(category=>{
          return {
            ...category,
            postList:[],
            pageIndex:1,
            pageSize:5,
            loading:false,
            finished:false
          }
        })
        this.categoriesList=newDate;
        console.log(this.categoriesList);
        
        this.getPost()
        }else{
          
          this.$axios({
            url: '/category',
            method: 'get'
          }).then(res => {
            console.log(res.data)
            const newDate = res.data.data.map(category=>{
              return {
                ...category,
                postList:[],
                pageIndex:1,
                pageSize:10,
                loading:false,
                finished:false
              }
            })
            this.categoriesList=newDate;
            console.log(this.categoriesList);      
            this.getPost()
          })
        }
    },
    loadMorePost  (){
      console.log('加载下一页');
      
        const currentCategory=this.categoriesList[this.active]
        currentCategory.pageIndex +=1
        this.getPost();
    }, 
    getPost() {
      const currentCategory =this.categoriesList[this.active]
      this.$axios({
        url: '/post',
        params: {
          category: this.categoryId,
          pageIndex:currentCategory.pageIndex,
          pageSize:currentCategory.pageSize,
        }
      }).then(res => {
        console.log(res.data)
        // this.postList = res.data.data
        // 获取文章后，不应该放入公共data 中的 postList
        // 而是放入当前激活栏目 的postList
       currentCategory.postList=[...currentCategory.postList,...res.data.data]
      // 这里加载完了文章列表数据，然后需要手动将当前栏目的加载状态改回false 也就是没有正在加载，这样子才能在下次拉到底的时候触发加载下一项
       currentCategory.loading=false
      //  最后如果发现数据已经到了尽头，应该告诉该组件已经完毕，禁止再次发送请求
      if(res.data.data.length < currentCategory.pageSize){

        currentCategory.finished=true
      }

      })
    }
  }
}
</script>

<style lang="less" scoped>
// // 导航条
ul {
  width: 100vw;
  height: 12.5vw;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #e4e4e4;
}
li {
  text-align: center;
  flex: 1;
  height: 45px;
  line-height: 45px;
}
.listnew {
  margin-top: 5.556vw;
  padding: 0 15px;
  border-bottom: 1px solid #e4e4e4;

  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: #a1a1a1;
    font-size: 12px;
  }
}
.listnew2 {
  margin-top: 10px;
  padding: 0 4.167vw;
  border-bottom: 1px solid #e4e4e4;

  .tu {
    display: flex;
  }
  img {
    width: 31.111vw;
    flex: 1;
    margin-top: 5px;
  }
  span {
    display: block;
    width: 100vw;
    height: 55px;
    line-height: 55px;
    font-size: 3.333vw;
    color: #868686;
  }
  .tu img:nth-child(2) {
    margin: 5px 2px 0;
  }

  .shibao {
    height: 45px;
  }
}
.viod {
  span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
  img {
    width: 100vw;
  }
}
</style>