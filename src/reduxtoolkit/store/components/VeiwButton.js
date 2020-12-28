import React from 'react'
import {useSelector} from 'react-redux'

const VeiwButton = () => {
    const counter = useSelector(state => state)
    return (
        <div>
            counter value: {counter}
        </div>
    )
}

export default VeiwButton