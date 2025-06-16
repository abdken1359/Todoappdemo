<template>
    <div>
       <ContentHero class="h-[70vh]"/>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'TodoApp',
    ogTitle:'TodoApp',
    description:'A basic todo app made with Nuxt 3 + Supabase + Daisy UI',
    ogDescription:'A basic todo app made with Nuxt 3 + Supabase + Daisy UI',
    ogUrl:'https://todoappdemo-zeta.vercel.app/',
    ogImage:'/logo.png',
    ogType:'website',
    ogSiteName:'TodoApp'
})
</script>