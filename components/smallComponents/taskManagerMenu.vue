<template>
    <div>
        <section class="simple-flex flex-col md:flex-row">
            <div class=" flex-1">
               <label class="input  w-full">
                <Icon name="hugeicons:search-02" class="text-lg"/>
                <input type="search" class="w-full block grow" placeholder="Search Items" :disabled="noTodos">
               </label>
            </div>
            <div class="flex-none flex gap-2">
                <button class="btn btn-success" @click="openModal()">
                    <Icon name="hugeicons:add-01" class="text-lg"/>
                     Add Todo
                </button>
                <button class="btn btn-error" :disabled="noTodos">
                    Delete All Items 
                    <Icon name="hugeicons:delete-02" class="text-lg"/>
                </button>
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
                <h3 class="mb-4">Add Todo</h3>
                <form @submit.prevent>
                    <label class=" input w-full">
                        <Icon name="hugeicons:license" class="text-lg"/>
                        <input type="text" placeholder="Enter Task name" v-model="todo">
                        
                    </label>
                    <button type="submit" class="btn mt-4 btn-block btn-primary" :disabled="disabled">
                        <Icon name="hugeicons:add-01" class="text-lg"/><span>Add</span>
                    </button>
                </form>
               
            </div>

        </dialog>
        <!--Modals end-->
    </div>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const {data:todos,error}=await useSelectTodos()

if(error){
    console.log(error)
}
console.log(todos)
const noTodos=computed(()=>{
    return todos?false:true
})
const addItemModal=ref<HTMLDialogElement|null>(null)
const openModal = () => {
  addItemModal.value?.showModal()
}
const todo=ref('')
const disabled=computed(()=>{
    return todo.value.length>0?false:true
})
</script>