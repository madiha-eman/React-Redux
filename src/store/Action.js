import AddTodo from "./AddTodo"

export const increment = 'INCREMENT'
export const decrement = 'DECREMENT'
export const addtodo = 'AddTodo'
export const deltodo = 'DelTodo'



export const incAction =() => {
    return{
    type: increment,
    }
}


export const decAction =() => {
    return{
    type: decrement,
}}
export const addTodo=(todo) =>{
     return{
         type:addtodo,
         payload:todo
     }
}

export const delTodo=(id) =>{
    return {
        type:deltodo,
        payload:id
    }
}
