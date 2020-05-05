import { ADD_TODO, DELETE_TODO } from "../actions/types";

const toDoReducer =(state=[],action)=>{
   switch(action.type){
       case ADD_TODO:
           return [...state,action.todo];
        case DELETE_TODO:
            return [...state.slice(0,action.index),...state.slice(action.index+1,state.length)]
       default:
           return state    

   }

}

export default toDoReducer