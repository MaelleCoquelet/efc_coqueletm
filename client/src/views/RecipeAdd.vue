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
        formData.photo = reader.result;
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

</script>

<template>
    <section>
        <header>
            <h2>Ajout d'une nouvelle recette</h2>
        </header>
    </section>
    
</template>
