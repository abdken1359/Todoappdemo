export const useAddDefaultTableValues=async ()=>{
    const user=useSupabaseUser()
    const supabase=useSupabaseClient()
    const {data:retrievedEmail,error:retrieveError}=await supabase.from("User_Todos").select("email").eq("email",user.value?.email).single()
    if(retrieveError){
        return {
            error:retrieveError.message,
            data:null
        }
    }else{
        return{
            error:null,
            
        }

    }
}