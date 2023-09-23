import { createRouter, createWebHistory } from 'vue-router'
import { PageMain } from '@/pages/Main'
import { PageButtons } from '@/pages/Buttons'
import { PageTypography } from '@/pages/Typography'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: PageMain
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: PageButtons
    },
    {
      path: '/typography',
      name: 'typography',
      component: PageTypography
    }
  ]
})

export default router
