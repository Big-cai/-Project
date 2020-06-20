import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import gr from '../views/ge.vue'


Vue.use(VueRouter)

  const routes = [
  {
   path:'/login',
   component:Login
  },
  {
    path:'/gr',
    component:gr
  }

  
]

const router = new VueRouter({
  routes
})

export default router
