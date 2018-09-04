import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Gzh from '@/components/Gzh'
import Me from '@/components/Me'

// 主题相关的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Weex from '@/components/topics/Weex'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'

// 加载主题详情组件
import Topic from '@/components/topics/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component: All
        },
        {
          path:'good',
          component: Good
        },
        {
          path:'weex',
          component: Weex
        },
        {
          path:'share',
          component: Share
        },
        {
          path:'ask',
          component: Ask
        },
        {
          path:'job',
          component: Job
        },
        {
          path: 'topic/:id',
          component: Topic
        }
      ]
    },
    {
      path: '/gzh',
      name: 'Gzh',
      component: Gzh
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path:'/*',
      redirect: '/index'
    }
  ]
})
