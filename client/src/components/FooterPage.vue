<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <footer class="text-white bg-black">
        <p>Cooking Isekai</p>
        <nav>
            <ul>
                <li>Fake Legal Stuff</li>
                <li>More Fake Legal Stuff</li>
                <RouterLink to="/">Settings</RouterLink>
            </ul>
        </nav>
        <p>&copy; 2024</p>
    </footer>
</template>