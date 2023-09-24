import { createRouter, createWebHistory } from 'vue-router'
import { PageMain } from '@/pages/Main'
import { PageButtons } from '@/pages/Buttons'
import { PageTypography } from '@/pages/Typography'
import { PageCheckboxes } from '@/pages/Checkboxes'
import { PageRadioButtons } from '@/pages/RadioButtons'
import { PageProgress } from '@/pages/Progress'
import { PageInputs } from '@/pages/Inputs'
import { PageTabs } from '@/pages/Tabs'

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
    },
    {
      path: '/progress',
      name: 'progress',
      component: PageProgress
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: PageInputs
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: PageTabs
    }
  ]
})

export default router
