import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchPost',
    async(data, thunkAPI)=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()

    }
)

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{title: 'milk', id:1}],
        posts:[],
    },
    reducers: {
        add: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            // let {id, title} = newObj
            state.todos =  [...state.todos, newObj]
            return state

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
    deletetodo: {
        reducer(state, action){
            console.log(action.payload.id)
            state.todos = state.todos.filter(item=>item.id!=action.payload.id)
            return state

        },
        prepare(id){
            return {payload: {id}}
        }
    }
 
    },
    extraReducers:{
        [fetchPost.fulfilled]:( state, action)=> {
            console.log(action.payload.slice(0,10))
           state.posts = action.payload.slice(0,10)
         
        }
 }
})
export const {add, deletetodo} =TodoSlice.actions;
const todoreducer = TodoSlice.reducer
export default todoreducer 





