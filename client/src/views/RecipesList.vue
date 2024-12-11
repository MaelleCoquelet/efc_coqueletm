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
      <p>Bienvenue sur Cooking Isekai, votre site de référence en recettes de l'imaginaire. Trouvez ici vos recettes
        préférées de l'univers de Zelda, Mario, Lara Croft et bien d'autres !</p>
    </header>
    <ul>
      <img v-if="recipesStore.fetching" src="@/assets/spinner.svg" alt="Icône de chargement">
      <RouterLink :to="`/recipe/${recipe.id}`" v-for="(recipe, index) in recipesStore.recipes" :key="recipe.id">
        <li>
          <h3>{{ recipe.universe }}</h3>
          <h4>{{ recipe.name_recipe }}</h4>
        </li>
        <img :src="`${recipe.image_recipe}`" alt="Photo de la recette">
      </RouterLink>
    </ul>
  </section>
</template>
