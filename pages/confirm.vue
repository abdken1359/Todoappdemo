<template>
    <div>
        <section class="a-container h-[80vh]">
            <h1 v-if="!errorOccurred">Redirecting...</h1>
             <div class="flex flex-col gap-4" v-if="errorOccurred">
                <h1>An error occurred while saving your account</h1>
                <NuxtLink class="btn btn-error" to="/login">Back to Log In</NuxtLink>
            </div>

        </section>
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
const errorOccurred=ref(false)
const insertStuffs=async ():Promise<'success'|'error'>=>{
    const {data,error}=await supabase.from("User_Todos").select("user_id").eq("user_id",user.value?.id)
    .maybeSingle()
    if(data && data.user_id===user.value?.id){
        console.log("Old user logging in...")
        return 'success'
    }else{
       const userEmail=user.value?.email
       const userId=user.value?.id
       const {error:insertionError}=await supabase.from("User_Todos").insert({
        email:userEmail,
        user_id:userId,
       })
       if(insertionError){
        console.log(insertionError.message)
        return 'error'
       }else{
        return 'success'
       }
    }
    

}
watch(user,async ()=>{
    errorOccurred.value=false
    if(user.value){
        const status = await insertStuffs()
        if (status==='success'){
            return navigateTo("/")
        }else{
            errorOccurred.value=true
        }
       
    }
},{
    immediate:true
})
</script>