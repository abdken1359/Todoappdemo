<template>
    <div class="a-container mt-10">

        <h2 class=" break-all">Task Manager</h2>
        <SmallComponentsTaskManagerMenu/>
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
</script>