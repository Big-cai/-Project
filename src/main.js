import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 1.引入vant-ui库 
import Vant from 'vant'
// 2.引入对应的css文件
import 'vant/lib/index.css'
// 3.注册组件
Vue.use(Vant)
// 1.引入请求库axios
import axios from 'axios'
// import { config } from 'vue/types/umd'

// 设置基准路径
axios.defaults.baseURL='http://127.0.0.1:3000'

axios.interceptors.request.use(config=>{
  // 判断本地储存有token 但是请求配置没有就要加上
  if(localStorage.getItem('token') && !config.headers.Authorization){
    config.headers.Authorization= "Bearer " + localStorage.getItem('token')
  }
  return config
})

// 设置响应拦截器、
  import {Toast} from 'vant'
  axios.interceptors.response.use(res=>{
    console.log('发送了请求');
    // 对获取的数据进行处理
    const {statusCode,message} = res.data
    console.log(statusCode);
    console.log(message);
    if(message == '用户信息验证失败'){
      // 判断请求数据，状态是401的话，弹出提示框
      // 并删除本地储存的 token 和userId
      Toast.fail('用户信息校验失败，请重新登录')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/login')
     
    }
    return res
  })

  // 注册到Vue原型上
Vue.prototype.$axios = axios;

// 路由守卫
router.beforeEach((to,from,next)=>{
    // // 验证是否是个人中心页
    // console.log('进入了守卫');
    // const token = localStorage.getItem('token')

    if(to.meta.auth){
      const token =localStorage.getItem("token")
      if(token){
        next();
      }else{
       return router.push('/login')
       }
    }else{
      next();
    }
})


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App)}
  
}).$mount('#app')
