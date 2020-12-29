import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const TodoSlice = createSlice({
    name:'todo',
    initialState: [{title:'tea', id:1}],
    reducers:{
       add:{
           reducer(state, action){
         let newObj = action.payload
         let {id, title} = newObj
         let newState = [...state,newObj]
         return newState
       },
       prepare(title){
           return{payload:{title:title, id:uuidv4()}}
       },
    
       deletetodo:{
           reducer(state,action){
               let newState1 = state.filter(item=> item.id != action.payload.id)
               return newState1
           }
       },
       prepare(id){
           return{payload: {id}}
       }
    }}
    })

export const {add, deletetodo} =TodoSlice.actions;
const todoreducer = TodoSlice.reducer


export default todoreducer 
