<style scoped>
@keyframes intro-animation{
    0%{
        opacity: 0;
        transform: translateY(20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
.heading-entrance{
    animation: intro-animation 0.5s ease-in;
}
.other-entrance{
    animation: intro-animation 0.8s ease-in;
    
}
</style>
<template>
    <section class="text-center a-container mt-16">
        <h1 class="lg:w-3/4 mx-auto  heading-entrance">
            Simple Todo App Made With 
            <i class="text-green-500">Nuxt 3</i> + 
            <i class="text-violet-600">Supabase</i> + 
            <i class="text-amber-500">Daisy Ui</i>
        </h1>
        <NuxtLink to="/login" class="btn btn-primary btn-lg other-entrance">Login</NuxtLink>
    </section>
</template>
<script setup lang="ts">
</script>