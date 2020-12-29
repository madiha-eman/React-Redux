import {configureStore} from '@reduxjs/toolkit'
import todoreducer from './TodoSlice'

const Store = configureStore({
    reducer: todoreducer

}) 

export default Store;