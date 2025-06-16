<template>
    <div>
        <section class="a-container">
            <h1>Redirecting...</h1>
        </section>
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
watch(user,()=>{
    if(user.value){
        return navigateTo("/")
    }
},{
    immediate:true
})
</script>