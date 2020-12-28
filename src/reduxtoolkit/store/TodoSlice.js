import {createSlice} from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name:'todo',
    initialState: [],
    reducers:{
       add(state, action){
           return[...state,action.payload]
       }
    }
})

export const {add} =TodoSlice.actions;
const reducer = TodoSlice.reducer


export default reducer 
