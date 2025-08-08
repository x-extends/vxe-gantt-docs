import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const ganttRouteConfig: RouteRecordRaw = {
  path: 'gantt',
  component: RouteLayout,
  children: [
  ]
}
