<template>
    <div>
        <section class="simple-flex flex-row">
            <div class=" flex-1">
               <label class="input  w-full">
                <Icon name="hugeicons:search-02" class="text-lg"/>
                <input type="search" class="w-full block grow" 
                placeholder="Search Items" :disabled="noTodos" v-model="utils.searchModel">
               </label>
            </div>
            <div class="flex-none hidden lg:flex gap-2">
                <button class="btn btn-primary" @click="openModal()">
                    <Icon name="hugeicons:add-01" class="text-lg"/>
                     Add Task
                </button>
                <button class="btn btn-error" :disabled="noTodos" @click="openDeleteAllTasksModal()">
                    Delete All Task 
                    <Icon name="hugeicons:delete-02" class="text-lg"/>
                </button>
            </div>

            <div class="flex-none flex lg:hidden gap-2">
                <div class=" tooltip tooltip-primary" data-tip="Add Task">
                <button class="btn btn-primary" @click="openModal()" aria-label="Add Task">
                    <Icon name="hugeicons:add-01" class="text-lg"/>
                     
                </button>
                </div>
                <div class=" tooltip tooltip-error" data-tip="Delete All Tasks">
                <button class="btn btn-error" :disabled="noTodos" @click="openDeleteAllTasksModal()" aria-label="Delete all tasks">
                    
                    <Icon name="hugeicons:delete-02" class="text-lg"/>
                </button>
                </div>
            </div>

        </section>
        <!--Modals-->
        <dialog ref="addItemModal" class=" modal">
            <div class="modal-box ">
                 <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
      <Icon name="hugeicons:cancel-01" class="text-lg"/>
      </button>
    </form>
                <h3 class="mb-4">Add Task</h3>
                <form @submit.prevent="addTodo()">
                    <label class=" input w-full">
                        <Icon name="hugeicons:license" class="text-lg"/>
                        <input type="text" placeholder="Enter Task name" v-model="todo">
                        
                    </label>
                    <button type="submit" class="btn mt-4 btn-block btn-primary" 
                    :disabled="disabled || loading">
                        <Icon name="hugeicons:add-01" class="text-lg" v-show="!loading"/><span
                        v-show="!loading"
                        >Add</span>
                        <span class=" loading loading-spinner" v-show="loading"></span>
                    </button>
                </form>
               
            </div>

        </dialog>

        <dialog ref="deleteAllTasksModal" class="modal">

            <div class=" modal-box">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <Icon name="hugeicons:cancel-01" class="text-lg"/>
                    </button>
                </form>
                <h3>Confirmation</h3>
                <p class="my-4">Are sure you want to delete all tasks?</p>
                 <div class=" modal-action">
                <button class="btn btn-error" @click=deleteAllTodos()>Yes I'm sure</button>
                <button class="btn btn-success">Cancel</button>
            </div>
            </div> 
           

        </dialog>
        <!--Modals end-->
    </div>
</template>
<script setup lang="ts">
const todos=ref<any>(null)
const error=ref<string|null>(null)
const utils=useUtilitiesStore()
const loading=ref(false)
const noTodos=computed(()=>{
    if(todos.value===null || todos.value.length<1){
        return true
    }else{
        return false
    }
})
const addItemModal=ref<HTMLDialogElement|null>(null)
const deleteAllTasksModal=ref<HTMLDialogElement|null>(null)
const openModal = () => {
  addItemModal.value?.showModal()
}
const todo=ref('')
const disabled=computed(()=>{
    return todo.value.length>0 ?false:true
})
const fetchTodos=async ()=>{
 const {data,error}=await useSelectTodos()

if(error){
    console.log(error)
}
todos.value=data

}
const addTodo=async ()=>{
    loading.value=true
    setTimeout(async ()=>{
         await useAddTodo(todo.value)
    todo.value=''
    addItemModal.value?.close()
      loading.value=false
      utils.showToast('success','Task added successfully!')
    },1500)
   
}
const openDeleteAllTasksModal=():void=>{
    deleteAllTasksModal.value?.showModal()

}
const deleteAllTodos=async():Promise<void>=>{
    await useDeleteAllTodos()
    deleteAllTasksModal.value?.close()
    utils.showToast('success','All tasks have been deleted!')
    
}

onMounted(async ()=>{
await fetchTodos()
setInterval(async ()=>{
    await fetchTodos()
},1000)
     
})
</script>