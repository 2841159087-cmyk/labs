import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/users', component: Users },
    { path: '/user/:id', name: 'user', component: User },
    {
      path: '/center',
      component: Center,
      children: [
        { path: '', redirect: '/center/profile' },
        { path: 'profile', component: CenterProfile },
        { path: 'orders', component: CenterOrders }
      ]
    },
    { path: '/named', component: NamedDemo },
    { path: '/program', component: ProgramDemo },
    { path: '/search', component: Search },
    { path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router