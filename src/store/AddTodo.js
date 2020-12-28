import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, delTodo} from './Action'
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
        dispatch(addTodo(task))
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <ViewTodo />
        </div>
    )
}

export default AddTodo
