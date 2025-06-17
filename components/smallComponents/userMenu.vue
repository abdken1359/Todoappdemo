<template>
    <div>
<div class="dropdown dropdown-center">
  <div tabindex="0" role="button" class="btn text-2xl btn-ghost" aria-label="User menu">
    <Icon name="hugeicons:user-circle-02" />
  </div>
  <div tabindex="0" class="dropdown-content z-[1]  p-4 bg-base-100 shadow-lg w-[300px] max-w-[400px] rounded-box">
    <p><span class="font-bold">Email :</span> <span>{{ user?.email }}</span></p>
    <button class="mt-4 btn btn-error mx-auto block w-full" :disabled="loading" @click="signOut()">
        Sign Out
    </button>
    <p class="mt-4 text-error text-base" v-if="errorOccurred">
        An unexpected error occurred. Please try again
    </p>
  </div>
</div>

    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
const loading=ref(false)
const errorOccurred=ref(false)
const router=useRouter()
const signOut=async ():Promise<void>=>{
    errorOccurred.value=false
    loading.value=true
    const {error}=await supabase.auth.signOut()
    if(error){
        errorOccurred.value=true
    }else{
        router.push("/login")
    }


}
</script>