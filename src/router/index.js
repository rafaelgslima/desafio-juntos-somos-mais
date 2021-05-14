import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '@/views/UserView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'User',
    default: UserView,
    component: UserView
  },
  {
    path: '/user/userDetail/:id',
    name: 'UserDetail',
    component: UserDetailView
  },
  { path: "/", redirect: '/user' },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
