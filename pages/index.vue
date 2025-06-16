<template>
    <div>
        <section class="a-container">
        <h1>Hello Task doer!</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Rem quasi sequi dignissimos amet. Quos optio ipsum recusandae tempore.
         Sed inventore saepe veritatis natus ex atque dignissimos labore pariatur magnam omnis!</p>
         <div class="mt-4 flex flex-col gap-4">
            <button class="btn btn-primary">Change theme</button>
         </div>
         </section>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'TodoApp',
    ogTitle:'TodoApp',
    description:'A basic todo app made with Nuxt + Supabase',
    ogDescription:'A basic todo app made with Nuxt + Supabase',
    ogUrl:'https://todoappdemo-zeta.vercel.app/',
    ogImage:'/logo.png',
    ogType:'website',
    ogSiteName:'TodoApp'
})
</script>