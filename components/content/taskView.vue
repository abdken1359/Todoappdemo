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
            <div v-else class="mt-10 w-full">
             
                <template v-for="(todo,index) in searchedTodos" :key="index">
                     <section class="flex flex-row items-center gap-2 mb-4">
                    <div class="flex-1">
                        <p class="text-base">{{ todo.name }}</p>
                    </div>
                    <div class="flex-none">
                        <button class=" btn btn-error" aria-label="Delete Task">
                            <Icon name="hugeicons:delete-02" class="text-lg"/>
                        </button>
                    </div>
                    </section>
                </template>
             

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const todos=ref<any>(null)
const utils=useUtilitiesStore()
const anyError=ref<string|null>('')
const searchedTodos=computed(()=>{
     if (Array.isArray(todos.value)){
        return todos.value.filter(todo=> todo.name.toLowerCase().includes(utils.searchModel.toLowerCase()))
     }
})
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