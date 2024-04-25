import React from 'react'

export default function ToDoLists(props) {
    
  return (
    <>
    <div className='todo_style'>
    <i className="fa fa-close" onClick={()=>
    {props.OnDelete(props.id)}}></i>
    <li>{props.text}</li>

    </div>
    </>
  )
}
