import React from 'react'
import {useState} from 'react'

export const Task = ({task, onUpdate, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [update, setUpdate] = useState(task.title)



    const handleChange = (e) => {
        setUpdate(e.target.value)
    }
    const handleClick = () => {
        onUpdate(task.id, update)
        setIsEdit(!isEdit)
    }


  return (

    <>
        <div>
            {isEdit ? 

            (<form className='update__container'>
                <input type="text" onChange={handleChange} value={update}/>
                <button onClick={handleClick} className="button__edit">Update</button>
            </form>) : 

            (
            <div className='task__list'>
                <div>
                    <p>{task.title}</p>

                </div>
                <button onClick={() => setIsEdit(!isEdit)} className="button__edit">Edit</button>
                <button onClick={(e) => onDelete(task.id)} className="button__delete">Delete</button>
            </div>)}

        </div>

    </>

  )
}
