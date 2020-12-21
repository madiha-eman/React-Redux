import {addtodo, deltodo} from './Action'
const initialState=[
    {title: '1', id: 1},
    {title: '2', id: 2},
    {title: '3', id: 3},
]
export default function TodoReducer(state= initialState, action){
    switch (action.type) {
        case addtodo:
            return [...state, action.payload]
            break;
    
        default:
            return state
            break;
    }
} 