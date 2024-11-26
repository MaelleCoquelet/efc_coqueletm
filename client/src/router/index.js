import { createRouter, createWebHistory } from 'vue-router'
import RecipesList from '@/views/RecipesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecipesList,
    },
  ],
})

export default router
