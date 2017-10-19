import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Info from '@/components/Info'
import Stark from '@/components/Stark'
import Hero from '@/views/hero'
import Daily from '@/views/daily'
import Vuex from '@/components/vuex'

Vue.use(Router)
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const UserProfile = {
  template: '<div>我是UserProfile组件</div>'
}
const UserPosts = {
  template: '<div>我是UserPosts组件</div>'
}
//  const NotFind = {
//  template: '<div><h1>错误404</h1>找不到相应页面</div>'
//  }
export default new Router({
//  mode: 'history',
  mode: 'hash',
  linkExactActiveClass: 'zhangsan',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '',
          component: Blog
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/info',
          component: Info
        }
      ]
    },
    { path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '*',
//    component: NotFind,
      redirect: (to) => {
        console.log(to)
        if (to.path === '/aaa') {
          return '/work'
        } else if (to.path === '/bbb') {
          return '/info'
        } else {
          return '/'
        }
      }
    },
    {
      path: '/stark/:user?',
      component: Stark
    }

  ]
})
