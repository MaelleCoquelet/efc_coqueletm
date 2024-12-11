<script setup>
import { useRecipesStore } from '@/stores/recipes';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const recipesStore = useRecipesStore();

onMounted(async () => {
  // On récupère tous les reportages
  await recipesStore.fetchAllRecipes();
});

</script>

<template>
  <section class="">
    <header class="">
      <h2>Inventaire des recettes</h2>
      <p>Bienvenue sur Cooking Isekai, votre site de référence en recettes de l'imaginaire. Trouvez ici vos recettes
        préférées de l'univers de Zelda, Mario, Lara Croft et bien d'autres !</p>
    </header>
    <img v-if="recipesStore.fetching" src="@/assets/spinner.svg" alt="Icône de chargement">
    <ul class="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <RouterLink :to="`/recipe/${recipe.id}`" v-for="(recipe, index) in recipesStore.recipes" :key="recipe.id"
        class="hover:bg-violet-100 *:hover:bg-opacity-100 hover:transition-all ease-in-out min-h-64 max-w-96 bg-top bg-cover"
        :style="`background-image:url(${recipe.image_recipe})`">
        <li class="bg-violet-100 bg-opacity-30">
          <h3>{{ recipe.universe }}</h3>
          <h4>{{ recipe.name_recipe }}</h4>
        </li>
      </RouterLink>
    </ul>
  </section>
</template>
