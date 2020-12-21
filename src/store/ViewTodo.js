import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { editTodo, delTodo } from './Action'

const ViewTodo = () => {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleDel =(id)=>{
        dispatch(delTodo(id))
    }
    const handleChange = (e)=>{
        settitle(e.target.value)
    }
    const handleEdit = (id)=>{
        const text = prompt('g')
        dispatch(editTodo(id, text))
    }
    
    return (
        <div>{title}
            {state.map((item)=>(
                <div>{item.title}
                <button onClick={()=>handleDel(item.id)}>del</button>
                <button onClick={()=>handleEdit(item.id)}>edit</button>

                </div>
            ))}
        </div>
    )
}

export default ViewTodo
