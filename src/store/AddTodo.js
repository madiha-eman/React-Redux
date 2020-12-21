import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtodo, deltodo} from './Action'
import ViewTodo from './ViewTodo'

const AddTodo = () => {
    const [task, settask] = useState({title:'', id:''})
    const dispatch = useDispatch()

    const handleChange =(e)=>{
       console.log('im handle')
       settask({
           title:e.target.value,
           id: Math.random()
       })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addtodo(task))
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <ViewTodo />
        </div>
    )
}

export default AddTodo
