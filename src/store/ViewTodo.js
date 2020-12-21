import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const ViewTodo = () => {
    const state = useSelector(state => state)
    
    return (
        <div>
            {state.map((item)=>(
                <div key={id}>{item.title}</div>
            ))}
        </div>
    )
}

export default ViewTodo
