export const useSelectTodos=async()=>{
    const user=useSupabaseUser()
    const supabase=useSupabaseClient()
    const {data,error}=await supabase.from("User_Todos").select("todos").eq("user_id",user.value?.id).single()
    if(error){
        return {
            error:error.message,
            data:null,
        }
    }else{
        return {
            error:null,
            data:data.todos
        }
    }
}