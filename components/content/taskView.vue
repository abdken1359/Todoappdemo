<template>
    <div>
        <div class="text-center" v-if="anyError">
            <NuxtImg src="/error.png" alt="Error Image" class="w-[50%] md:w-[30%] lg:w-[20%]
             mx-auto block mb-4"/>
            <h3>Sorry an error occurred why getting your todos.</h3>
            <button class="btn btn-neutral mt-4">Try again</button>
            
        </div>
        <div v-else>
            <div v-if="!todos" class="text-center">
                <NuxtImg src="/empty.png" alt="Empty list Image" class="w-[50%] md:w-[30%] lg:w-[20%]
                 mx-auto block mb-4"/>
            <h3>You have no Tasks Added</h3>
            <p>Your tasks will be visible here.</p>
            </div>
            <div v-else>
                <p class="my-4">Yeah added them!</p>
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const todos=ref<any>(null)
const anyError=ref<string|null>('')
onMounted(()=>{
    setInterval(async ()=>{
        const {data,error}=await useSelectTodos()
        if(error){
            anyError.value=error

        }else{
            todos.value=data
        }
    },500)
})
</script>