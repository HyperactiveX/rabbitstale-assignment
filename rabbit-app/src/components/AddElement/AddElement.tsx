import React, { useState } from 'react'
import styles from './AddElement.module.css'

type Prop = {
  setList: React.Dispatch<React.SetStateAction<string[]>>
} 

const AddElement: React.FC<Prop> = ({ setList }) => {
  const [title, setTitle] = useState('')
  const handleClick = (title: string) => {
    if (title === '') {
      return alert('You must write something!')
    }
    return setList((list) => [...list, title])
  }


  return (
    <div className={styles.addComponent}>
        <input type='text' placeholder='Title...' className={styles.inputField} onChange={(e) => setTitle(e.target.value)}/>
        <button className={styles.addButton} onClick={() => handleClick(title)}>Add</button>
    </div>
  )
}

export default AddElement;
