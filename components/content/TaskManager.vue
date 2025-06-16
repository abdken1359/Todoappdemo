<template>
    <div class="a-container mt-10">

        <h2 class=" break-all">Task Manager</h2>
        <SmallComponentsTaskManagerMenu v-if="!error"/>
        <ContentTaskView class="mt-4"/>
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
const anyError=ref(false)
const {error}=await useSelectTodos()
</script>