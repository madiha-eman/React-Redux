import {createStore} from 'redux'
import CounterReducer from './Reducer'
import TodoReducer from './TodoReducer'

const store = createStore(TodoReducer)

export default store;