import { defineStore } from "pinia";
import fetcher from "@/utils/fetcher";
import { ref } from "vue";

export const useRecipesStore = defineStore("recipes", () => {
    const recipes = ref([]);
    const fetching = ref(false);

    // Pour chercher les recettes dans la base de données
    async function fetchAllRecipes(force = false) {
        // Valider si on a déjà du contenu, si oui on l'utilise au lieu de refaire une requête
        if (recipes.value.length > 0 && !force) {
            return;
        };
        fetching.value = true;

        // Lance la requête GET (en fonction de ce qu'on a mis côté serveur)
        const results = await fetcher.get("recipes/all");
        console.log(results);

        // On vérifie que notre fetcher a fonctionné, sinon on affiche results dans la console
        if (results.success) {
            recipes.value = results.data;
        } else { console.log(results); }

        fetching.value = false;
        
        // On retourne les résultats
        return results;
    }

    return {fetchAllRecipes, recipes, fetching};
});