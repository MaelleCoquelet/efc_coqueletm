<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import IconArrow from '@/assets/icons/IconArrow.vue';

const route = useRoute();

</script>

<template>
    <header class="bg-purple-100 px-3 md:px-14 lg:px-16 py-6 md:py-8 lg:py-10">
        <h1 class="">
            <RouterLink to="/">CookingIsekai</RouterLink>
        </h1>
        <div class="flex flex-col gap-2">
            <p class="italic">Transformez votre cuisine en terre de légendes</p>
            <nav>
                <ul class="flex flex-col gap-3 md:flex-row md:gap-6">
                    <li class="flex gap-2">
                        <RouterLink to="/" class="hover:text-violet-800 flex gap-2">
                            <IconArrow />Recettes
                        </RouterLink>
                    </li>
                    <li class="flex gap-2">
                        <RouterLink to="/add" class="hover:text-violet-800 flex gap-2">
                            <IconArrow />Nouvelle Recette
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>