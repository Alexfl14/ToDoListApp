import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div class="todo">
        <div class="text">{text}</div>
        <div class="icons">
            <BiEdit className='icon' onClick={updateMode} />
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo