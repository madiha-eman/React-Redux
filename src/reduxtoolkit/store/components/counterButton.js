import React, { useState } from 'react'
import { useDispatch }  from 'react-redux'
// import { decrementAction, doubleAction, incrementAction } from '../CounterSlice';
import VeiwButton from './VeiwButton'
import { v4 as uuidv4 } from 'uuid'
import {add, fetchPost} from '../TodoSlice'


const CounterButton = () => {
    const dispatch = useDispatch();
    const [task,settask]=useState({})
    const [title,settitle]=useState()
    const handleChange = (e)=>{
        settitle(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        settask({
            title:title,
            id:uuidv4()
        })
        dispatch(add(title))
        e.target[0].value=''
    }
 
    return (
        <div>
            {/* <button onClick={()=> dispatch(incrementAction())}>+</button>
            <button onClick={()=> dispatch(decrementAction())}>-</button>
            <button onClick={() => dispatch(doubleAction())}>++</button> */}

            <br/>
            <form onSubmit={handleSubmit}>
            <input type='text' name='title' onChange={handleChange}/>
            <button type='submit'>Add</button>
            </form>
            <button onClick={()=> dispatch(fetchPost())}>POST</button>
            <VeiwButton/>
        
        </div>
    )
}

export default CounterButton

