import React,{ useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deletetodo} from '../TodoSlice'

const VeiwButton = () => {
    const [title, settitle] = useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(deletetodo(id))

   }

    return (
        <div>{title}
            {state.map((item)=>(
                <div key={item.id}>
                    {item.title}
                    <button onClick={()=> handleDelete(item.id)}>X</button>
                </div>
            ))}
        </div>
    )
}

export default VeiwButton