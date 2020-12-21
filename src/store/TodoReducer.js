import {addtodo, deltodo, edittodo} from './Action'
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

            case deltodo:
                let newState = state.filter(
                    (item) => item.id !=action.payload)
                return [...newState]
                break;   
                case edittodo:
                    let index=state.findIndex((item)=>item.id == action.payload.id)
                    let newState1 = [...state]
                    newState1[index].title=action.payload.txt
                    return newState1; 
        default:
            return state
            break;
    }
} 