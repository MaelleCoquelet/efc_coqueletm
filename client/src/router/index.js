import { createRouter, createWebHistory } from 'vue-router'
import RecipesList from '@/views/RecipesList.vue'
import RecipeAdd from '@/views/RecipeAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecipesList,
    },
    {
      path: '/add',
      name: 'Add Recipe',
      component: RecipeAdd,
    },
  ],
})

export default router
