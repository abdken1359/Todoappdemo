<style lang="css" scoped>
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
</style>
<template>
    <div class="h-[80vh]">
    <section class="a-container">
        <ContentLoginCard/>
    </section>
    </div>
</template>
<script setup lang="ts">
import { ContentLoginCard } from '#components';

useSeoMeta({
    title:'Login | TodoApp',
    ogTitle:'Login to TAD',
    description:'Login to TAD, a basic todo app made with Nuxt 3 + Supabase + Daisy UI',
    ogDescription:'A basic todo app made with Nuxt 3 + Supabase + Daisy UI',
    ogUrl:'https://todoappdemo-zeta.vercel.app/login',
    ogImage:'/logo.png',
    ogType:'website',
    ogSiteName:'TodoApp'
})
definePageMeta({
    middleware:'divert-user'
})
</script>