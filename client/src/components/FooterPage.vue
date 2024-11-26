<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <footer class="text-white bg-black">
        <p>Cooking Isekai</p>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Recettes</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Ajouter une nouvelle recette</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Paramètres</RouterLink>
                </li>

            </ul>
        </nav>
        <p>&copy; 2024</p>
    </footer>
</template>