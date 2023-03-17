import React from 'react'
import { useState} from 'react'
import { Task } from './Task'


export const TodoApp = () => {
    const [title, setTitle] = useState("")
    const [list, setList] = useState([])



    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === ""){

        }else{
            const newObject = {
                id: crypto.randomUUID(),      // crea un id de forma aleatoria
                title: title,
                completed: false
            }
            setList([...list, newObject])
            setTitle("")
        }
    }
    
    const handleUpdate = (id, value) => {
        if(value === ""){
            return alert("Insert text")
        }else{
            const temp = [...list]
            const item = temp.find(item => item.id === id)
            item.title = value
            setList(temp)
        }
    }

    const handleDelete = (id) => {
        const temp = list.filter(item => item.id != id)
        setList(temp)
    }

  return (
    <div className='allBody'>
        <h1>List of tasks</h1>
        <form onSubmit={handleSubmit} className="form__create">
            <input onChange={handleInput} value={title}/>
            <button onClick={handleSubmit}>Create</button>
        </form>
        <div className='task__container'> 
            {list.map(task => (<Task key={task.id} task={task} onUpdate={handleUpdate} onDelete={handleDelete}/>))}
        </div>
    </div>
  )
}
