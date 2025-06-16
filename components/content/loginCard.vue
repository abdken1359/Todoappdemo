<style lang="css" scoped>
@keyframes intro-animation{
    0%{
        opacity: 0;
        transform: translateY(20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
.heading-entrance{
    animation: intro-animation 0.5s ease-in-out;
}
</style>
<template>
    <div>
        <div class=" card heading-entrance bg-base-100 mx-auto mt-10 shadow-lg w-full md:max-w-3/4">
       <span class="loading loading-dots bg-primary absolute top-10 right-10" v-show="loading"></span>
            <div class=" card-body overflow-x-hidden">
                <h2 class="text-center">Login</h2>

                <div class="flex flex-col gap-4">
                    <button class=" btn gap-4 bg-white
                    
                    text-lg font-normal text-black" @click="loginWithGoogle()"
                     :disabled="loading">
                       
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google logo" class="w-5">
                         <span>Login with Google</span>
                    </button>
                   <button class="btn gap-4 bg-white text-lg font-normal text-black" 
                   @click="loginWithGithub()"
                   :disabled="loading">
                     <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="w-5">
                     <span>Login with Github</span>

                   </button>
                 <p class="text-error text-base" v-if="errorOccurred">
                    An unexpected error occurred. Please try again.
                </p>
                </div>
            </div>

        </div>
        
    </div>
</template>
<script setup lang="ts">
const user=useSupabaseUser()
const supabase=useSupabaseClient()
const errorOccurred=ref(false)
const loading=ref(false)
const loginWithGoogle=async ():Promise<void>=>{
    loading.value=true;
    errorOccurred.value=false;
    const {error}=await supabase.auth.signInWithOAuth({
        provider:'google',
        options:{
            redirectTo:'https://todoappdemo-zeta.vercel.app/confirm'
        }
    })
    if(error){
        errorOccurred.value=true
        console.log(error.message)
    }
    loading.value=false
    

}
const loginWithGithub=async ():Promise<void>=>{
    loading.value=true;
    errorOccurred.value=false;
    const {error}=await supabase.auth.signInWithOAuth({
        provider:'github',
        options:{
            redirectTo:'https://todoappdemo-zeta.vercel.app/confirm'
        }
    })
    if(error){
        errorOccurred.value=true
        console.log(error.message)
    }
    loading.value=false
    
    

}
</script>