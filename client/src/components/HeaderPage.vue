<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header class="text-white bg-black">

        <h1>
            <RouterLink to="/">CookingIsekai</RouterLink>
        </h1>
        <p>Transformez votre cuisine en terre de légendes</p>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Recettes</RouterLink>
                </li>
                <li>
                    <RouterLink to="/add">Nouvelle Recette</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>