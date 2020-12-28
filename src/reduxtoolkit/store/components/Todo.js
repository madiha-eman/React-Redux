import React,{useState} from 'react'
function Todo() {
    const [title, settitle] = useState('')
  
    return (
        <div>
            {
                state.map((item)=>(
                    <div>
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Todo
