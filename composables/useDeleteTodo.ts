export const useDeleteTodo=async (index:number)=>{
    const user=useSupabaseUser()
    const supabase=useSupabaseClient()
    const {data:todos,error}=await useSelectTodos()
    if(error){
        console.log(error)
    }else{
        if(Array.isArray(todos)){
            const newTodos=[...todos]
            newTodos.splice(index,1)

            const {error:updateError}=await supabase.from("User_Todos").update({
                todos:newTodos
            }).eq("user_id",user.value?.id)
            if(updateError){
                console.log(updateError.message)
            }
        }

    }
}