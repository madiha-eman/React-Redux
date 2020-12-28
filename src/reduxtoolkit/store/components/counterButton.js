import React, { useState } from 'react'
import { useDispatch }  from 'react-redux'
import { decrementAction, doubleAction, incrementAction } from '../CounterSlice';
import { add } from '../TodoSlice';

const CounterButton = () => {
    const dispatch = useDispatch();
    const [title,settitle]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefualt();
        dispatch(add())

    }
    return (
        <div>
            <button onClick={()=> dispatch(incrementAction())}>+</button>
            <button onClick={()=> dispatch(decrementAction())}>-</button>
            <button onClick={() => dispatch(doubleAction())}>++</button>

            <br/>
            <from onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>settitle(e.target.value)}/>
            <button type='submit'>Add</button>
            </from>
        </div>
    )
}

export default CounterButton

