<template>
    <div class="a-container mt-10">

        <h2 class=" break-all">Task Manager</h2>
        <SmallComponentsTaskManagerMenu v-if="!error"/>
        <ContentTaskView class="mt-4" v-if="!showLoader"/>
        <SmallComponentsTaskLoader v-if="showLoader"/>
        <SmallComponentsTaost/>
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
const anyError=ref(false)
const showLoader=ref(true)
const {error}=await useSelectTodos()
onPrehydrate(()=>{
    console.log("Prehydrating...")
})
onMounted(()=>{
    setTimeout(()=>{
        showLoader.value=false
    },1000)
})
</script>