<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <footer class="bg-purple-100 flex flex-col gap-3 md:px-14 lg:px-16 py-6 md:py-8 lg:py-10">
        <p class="text-xl">Cooking Isekai</p>
        <nav>
            <ul class="flex flex-col gap-3 md:grid md:grid-cols-3 md:items-center">
                <li>
                    <RouterLink to="/" class="hover:text-violet-900 underline">Recettes</RouterLink>
                </li>
                <li>
                    <RouterLink to="/add" class="hover:text-violet-900 underline">Ajouter une nouvelle recette
                    </RouterLink>
                </li>

            </ul>
        </nav>
        <p>&copy; 2024</p>
    </footer>
</template>