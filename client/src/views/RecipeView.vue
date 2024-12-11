<script setup>
import { useRecipesStore } from '@/stores/recipes';
import { onMounted, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const route = useRoute();
const recipesStore = useRecipesStore();
const currentRecipe = reactive({ data: null });

onMounted(async () => {
    // On s'assure d'avoir les recettes chargées avant d'en afficher un
    await recipesStore.fetchAllRecipes();
    currentRecipe.data = recipesStore.getRecipe(route.params.id);
});

</script>

<template>
    <section v-if="currentRecipe.data" class="">
        <RouterLink to="/" class="underline hover:text-violet-800">Retour à l'accueil</RouterLink>
        <h2>{{ currentRecipe.data.universe }}</h2>
        <h3>{{ currentRecipe.data.name_recipe }}</h3>
        <div class="md:grid md:grid-cols-2 md:gap-6 md:justify-start">
            <img :src="currentRecipe.data.image_recipe" alt="Image de la recette" class="min-h-32">
            <div class="flex flex-col gap-3 md:gap-6 lg:gap-8 py-3">

                <p>Pour cette recette, vous aurez besoin de : {{ currentRecipe.data.ingredients }}</p>


                <p>Suivez les étapes !</p>
                <div>
                    <h4>Étape 1</h4>
                    <p>{{ currentRecipe.data.step_one }}</p>
                </div>
                <div>
                    <h4>Étape 2</h4>
                    <p>{{ currentRecipe.data.step_two }}</p>
                </div>
                <div>
                    <h4>Étape 3</h4>
                    <p>{{ currentRecipe.data.step_three }}</p>
                </div>
                <div>
                    <h4>Étape 4</h4>
                    <p>{{ currentRecipe.data.step_four }}</p>
                </div>
                <div v-if="currentRecipe.data.step_five">
                    <h4>Étape 5</h4>
                    <p>{{ currentRecipe.data.step_five }}</p>
                </div>
                <div v-if="currentRecipe.data.step_six">
                    <h4>Étape 6</h4>
                    <p>{{ currentRecipe.data.step_six }}</p>
                </div>
                <div v-if="currentRecipe.data.step_seven">
                    <h4>Étape 7</h4>
                    <p>{{ currentRecipe.data.step_seven }}</p>
                </div>
                <div v-if="currentRecipe.data.step_eight">
                    <h4>Étape 8</h4>
                    <p>{{ currentRecipe.data.step_eight }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
