<script setup>
import { useRecipesStore } from '@/stores/recipes';
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

// Récupérer la référence au routeur
const router = useRouter();

const recipesStore = useRecipesStore();

const formData = reactive({
    universe: "",
    name_recipe: "",
    image_recipe: "",
    ingredients: "",
    step_one: "",
    step_two: "",
    step_three: "",
    step_four: "",
    step_five: "",
    step_six: "",
    step_seven: "",
    step_eight: "",
});

const canSubmit = computed(() => {
    return formData.universe != "" && formData.name_recipe != "" && formData.image_recipe != "" && formData.ingredients != "" && formData.step_one != "" && formData.step_two != "" && formData.step_three != "" && formData.step_four != "";
})

// Création d'une fonction pour transformer une image en base 64
function preparePhotoFile(event) {
    // Récupérer la référence au fichier à envoyer
    const file = event.target.files[0];
    console.log(file);

    const reader = new FileReader();

    // On veut savoir quand le fichier va être chargé
    // Pour l'afficher dans le formulaire
    reader.onload = () => {
        // Ici on a accès à la photo en base 64
        formData.image_recipe = reader.result;
    }

    // Demande de charger le fichier en base 64
    reader.readAsDataURL(file);
};

async function preparePayload() {
    // Seulement si on peut soumettre
    if (canSubmit.value) {

        const results = await recipesStore.addNewRecipe(formData);
        if (results.success) {
            // Changer de page avec le routeur
            router.push("/");
        }

    };
}

const addStepFive = computed(() => {
    return formData.step_four != "";
});


const addStepSix = computed(() => {
    return formData.step_five != "";
});

const addStepSeven = computed(() => {
    return formData.step_six != "";
});

const addStepEight = computed(() => {
    return formData.step_seven != "";
});

</script>

<template>
    <section>
        <header>
            <h2>Ajout d'une nouvelle recette</h2>
        </header>
    </section>
    <section>
        <form action="#" @submit.prevent="preparePayload" class="bg-green-800 p-3 rounded">
            <label for="titre" class="flex gap-3 items-center bg-green-700 p-2 rounded-t-md">
                <span class="min-w-52 text-stone-50">Nom de l'univers :</span>
                <input v-model="formData.universe" type="text" id="titre" class="grow p-2"
                    placeholder="Alice au Pays des Merveilles" />
            </label>
            <label for="contenu" class="flex gap-3 items-center bg-green-700 p-2">
                <span class="min-w-52 text-stone-50">Nom de la recette :</span>
                <input class="grow p-2" v-model="formData.name_recipe" id="contenu"
                    placeholder="Les boulettes de boeuf"></input>
            </label>
            <label for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Image :</span>
                <div class="bg-green-300 p-2 hover:bg-green-500 cursor-pointer">Choisir la photo</div>
                <input @change="preparePhotoFile" type="file" id="photo" class="hidden" accept="image/*" />
                <img v-if="formData.image_recipe != ''" class="max-w-16" :src="formData.image_recipe" alt="Preview">
            </label>
            <label for="auteur" class="flex gap-3 items-center bg-green-700 p-2">
                <span class="min-w-52 text-stone-50">Ingrédients :</span>
                <textarea v-model="formData.ingredients" type="text" id="titre" class="grow p-2"
                    placeholder="Ingrédients" />
            </label>
            <label for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape une :</span>
                <textarea v-model="formData.step_one" type="text" id="titre" class="grow p-2"
                    placeholder="Ne pas utiliser son téléphone pour commander et décider d'une recette"></textarea>
            </label>
            <label for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape deux :</span>
                <textarea v-model="formData.step_two" type="text" id="titre" class="grow p-2"
                    placeholder="Rechercher les recettes possibles sur Hello Fresh"></textarea>
            </label>
            <label for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape trois :</span>
                <textarea v-model="formData.step_three" type="text" id="titre" class="grow p-2"
                    placeholder="Choisir une recette et y passer beaucoup trop de temps "></textarea>
            </label>
            <label for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape quatre :</span>
                <textarea v-model="formData.step_four" type="text" id="titre" class="grow p-2"
                    placeholder="Manger ?"></textarea>
            </label>
            <label v-if="addStepFive" for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape cinq : (optionnelle)</span>
                <textarea v-model="formData.step_five" type="text" id="titre" class="grow p-2"
                    placeholder="Encore une étape"></textarea>
            </label>
            <label v-if="addStepSix" for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape six : (optionnelle)</span>
                <textarea v-model="formData.step_six" type="text" id="titre" class="grow p-2"
                    placeholder="Encore une étape"></textarea>
            </label>
            <label v-if="addStepSeven" for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape seven : (optionnelle)</span>
                <textarea v-model="formData.step_seven" type="text" id="titre" class="grow p-2"
                    placeholder="Encore une étape"></textarea>
            </label>
            <label v-if="addStepEight" for="photo" class="flex gap-3 items-center bg-green-700 p-2 rounded-b-md">
                <span class="min-w-52 text-stone-50">Étape huit : (optionnelle)</span>
                <textarea v-model="formData.step_eight" type="text" id="titre" class="grow p-2"
                    placeholder="Encore une étape"></textarea>
            </label>
            <button :class="{ disabled: !canSubmit }" class="bg-green-300 hover:bg-green-500 w-full p-4 mt-2">Ajouter la
                recette</button>
        </form>
    </section>

</template>


<style scoped>
.disabled {
    @apply opacity-55 pointer-events-none;
}
</style>