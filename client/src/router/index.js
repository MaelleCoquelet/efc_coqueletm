import { createRouter, createWebHistory } from 'vue-router'
import RecipesList from '@/views/RecipesList.vue'
import RecipeAdd from '@/views/RecipeAdd.vue'
import RecipeView from '@/views/RecipeView.vue'

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
    {
      path: '/recipe/:id',
      name: 'View Recipe',
      component: RecipeView,
    },
  ],
})

export default router
