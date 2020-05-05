import{ ADD_TODO, DELETE_TODO } from "./types"

export const addTodoAction = todo =>({
    type:ADD_TODO,
    todo:todo
})


export const deleteTodoAction = index =>(
    {
        type: DELETE_TODO,
        index
    }
)



