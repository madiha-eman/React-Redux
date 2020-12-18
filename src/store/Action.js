const increment = 'INCREMENT'
const decrement = 'DECREMENT'


export const incAction =() => {
    return{
    type: increment,
    }
}


export const decAction =() => {
    return{
    type: decrement,
}}
