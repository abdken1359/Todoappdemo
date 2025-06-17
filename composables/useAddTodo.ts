 interface Todo{
    name:string,
    completed:boolean
 }
 export const useAddTodo = async (name: string) => {
  const { data, error } = await useSelectTodos()

  if (error) {
    console.error("Failed to fetch todos:", error.message)
    return
  }

  const todos: Todo[] = data ?? []

  const newTodo: Todo = {
    name:name,
    completed: false
  }

  const updatedTodos = [...todos, newTodo]

  // Now insert into Supabase or update state/store
  const { error: insertError } = await useSupabaseClient()
    .from("User_Todos")
    .update({ todos: updatedTodos })
    .eq("user_id", useSupabaseUser().value?.id)

  if (insertError) {
    console.error("Failed to update todos:", insertError.message)
  }
}
