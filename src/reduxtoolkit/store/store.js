import {configureStore} from '@reduxjs/toolkit'
import reducer from './TodoSlice'

const Store = configureStore({
    reducer: reducer

}) 

export default Store;