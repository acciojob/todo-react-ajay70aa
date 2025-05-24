import React, { useState } from 'react'

const Todo = () => {
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  function handleChange(e){
    setInputValue(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    if(!inputValue.trim()) return
    setTodoList([...todoList, inputValue])
    setInputValue("")
  }
  function handleDelete(index){
    const filteredItems = todoList.filter((_, i) => i !== index)
    setTodoList(filteredItems)
  }
  return (
    <div className='main-container'>
      <div className='input-container'>
        <input type="text" onChange={(e) => handleChange(e)} value={inputValue}/>
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <div className='todos-container'>
        {todoList.map((item, index) => {
          return (
            <div key={index} className='item-container'>
              <p>{item}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo