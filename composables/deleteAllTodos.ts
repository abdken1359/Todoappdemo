export const useDeleteAllTodos=async ()=>{
    const user=useSupabaseUser()
    const supabase=useSupabaseClient()
   const {error}=  await supabase.from("User_Todos").update({
    todos:null
   }).eq("user_id",user.value?.id)
   if(error){
    console.log(error.message)
   }
}