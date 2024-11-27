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
  <section>
    <header>
      <h2>Inventaire des recettes</h2>
      <img v-if="recipesStore.fetching" src="@/assets/spinner.svg" alt="Icône de chargement">
    </header>
    <ul>
      <RouterLink to="/" v-for="(recipe, index) in recipesStore.recipes" :key="recipe.id">
        <li>
          <h3>{{ recipe.universe }}</h3>
          <h4>{{ recipe.name_recipe }}</h4>
        </li>
        <img :src="`${recipe.image_recipe}`" alt="Photo de la recette">
      </RouterLink>
    </ul>
  </section>
</template>
