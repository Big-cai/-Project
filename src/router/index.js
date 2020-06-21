import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Registered.vue'
import Personal from '../views/Personal.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/login'
    },
  {
   path:'/login',
   component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/personal',
    component:Personal
  }
  
]

const router = new VueRouter({
  routes
})

export default router