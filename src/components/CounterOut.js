import React from 'react'
import { useSelector } from 'react-redux'

const CounterOut = () => {
    const counter = useSelector((state) => state.counter)
    return  <> Counter Value: {counter}</>
    
}

export default CounterOut
