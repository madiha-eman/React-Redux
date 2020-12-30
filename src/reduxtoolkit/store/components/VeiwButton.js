import React,{ useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo } from '../TodoSlice'


const VeiwButton = () => {
    const [title, settitle] = useState('')
    const state = useSelector((state) => state.todos)

    const dispatch = useDispatch()
    const post = useSelector((state) => state.posts)

   const handleDelete=(id)=>{
       console.log('hi')
       dispatch(deletetodo(id))
   }
    return (
        <div>{title}
            {
                state.map((item)=>(
                    <div key={item.id}>
                        {item.title}
                    <button onClick={()=>handleDelete(item.id)}>X</button>

                     </div>
                ))
            }
            <div>
                {post.map((post)=>
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        {post.body}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VeiwButton