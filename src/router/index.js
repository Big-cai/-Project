import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Registered.vue'
import Personal from '../views/Personal.vue'
import Focus from '../views/Focus.vue'
import Edit from '../views/Edit.vue'
import Comments from '../views/comments.vue'
import Collection from '../views/collection.vue'
import Column from '../views/column.vue'
import Index from '../views/index.vue'
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
  },
  {
    path:'/focus',
    component:Focus
  },
  {
    path:'/edit',
    component:Edit
  },
  {
    path:'/comments',
    component:Comments 
  },
  {
    path:'/collection',
    component:Collection
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/index',
    component:Index
  }
  
]

const router = new VueRouter({
  routes
})

export default router
