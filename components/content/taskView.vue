<style scoped>
.v-enter-from{
    opacity: 0;
    transform: translateY(10px);
}
.v-enter-to,.v-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.v-leave-to{
    opacity: 0;
    transform: translateY(-10px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
}

</style>
<template>
    <div>
        <div class="text-center" v-if="anyError">
            <NuxtImg src="/error.png" alt="Error Image" class="w-[50%] md:w-[30%] lg:w-[20%]
             mx-auto block mb-4"/>
            <h3>Sorry an error occurred why getting your todos.</h3>
            <button class="btn btn-neutral mt-4">Try again</button>
            
        </div>
        <div v-else>
            <div v-if="noTodos" class="text-center">
                <NuxtImg src="/empty.png" alt="Empty list Image" class="w-[50%] md:w-[30%] lg:w-[20%]
                 mx-auto block mb-4"/>
            <h3>You have no Tasks Added</h3>
            <p>Your tasks will be visible here.</p>
            </div>
            <div v-else class="mt-10 w-full">
             
                <template v-for="(todo,index) in searchedTodos" :key="index">
                    
                     <section v-show="searchedTodos?.length>0"
                      class="flex border-b-1 border-b-neutral/10 flex-row items-center gap-2 py-2">
                    <div class="flex-1">
                        <p class="text-base">{{ todo.name }}</p>
                    </div>
                    <div class="flex-none">
                        <div class="tooltip tooltip-error" data-tip="Delete task">
                        <button class=" btn btn-error" aria-label="Delete Task" @click="deleteThisTodo(index)">
                            <Icon name="hugeicons:delete-02" class="text-lg" />
                            <span class=" loading loading-spinner hidden" ></span>
                        </button>
                        </div>
                    </div>
                    </section>
                   
                </template>
               
                <div v-show="searchedTodos?.length<1">
                    <p>No task named "{{ utils.searchModel }}" found.</p>
                </div>
                
             

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const todos=ref<any>(null)
const utils=useUtilitiesStore()
const anyError=ref<string|null>('')
const loading=ref(false)
const searchedTodos=computed(()=>{
     if (Array.isArray(todos.value)){
        return todos.value.filter(todo=> todo.name.toLowerCase().includes(utils.searchModel.toLowerCase()))
     }
})
const noTodos=computed(()=>{
    if(todos.value===null || todos.value.length<1){
        return true
    }else{
        return false
    }
})
const deleteThisTodo=async(index:number):Promise<void>=>{
    loading.value=true
    setTimeout(async()=>{
        await useDeleteTodo(index)
        loading.value=false
        utils.showToast('success','Task deleted!')
    })
}
const fetchTodos=async()=>{
      const {data,error}=await useSelectTodos()
        if(error){
            anyError.value=error
            todos.value=null

        }else{
            todos.value=data
        }
}
onMounted(async ()=>{
   await fetchTodos()
    setInterval(async ()=>{
        await fetchTodos()
    },1000)
})
</script>