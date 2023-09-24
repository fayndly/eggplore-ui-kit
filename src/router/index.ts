import { createRouter, createWebHistory } from 'vue-router'
import { PageMain } from '@/pages/Main'
import { PageButtons } from '@/pages/Buttons'
import { PageTypography } from '@/pages/Typography'
import { PageCheckboxes } from '@/pages/Checkboxes'
import { PageRadioButtons } from '@/pages/RadioButtons'

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
      path: '/checkboxes',
      name: 'checkboxes',
      component: PageCheckboxes
    },
    {
      path: '/typography',
      name: 'typography',
      component: PageTypography
    },
    {
      path: '/radio-buttons',
      name: 'radiobuttons',
      component: PageRadioButtons
    }
  ]
})

export default router
