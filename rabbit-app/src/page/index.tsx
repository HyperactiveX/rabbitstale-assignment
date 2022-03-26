import React, { useState } from 'react';
import styles from './Index.module.css';
import AddElement from '../components/AddElement/AddElement';


function TodoList() {
  const [toDoList, setToDoList] = useState<string[]>([''])

  return (
      <div className={styles.page}>
        <div className={styles.addTodoList}>
          <h1>My Todo List</h1>
          <AddElement setList={setToDoList}/>
        </div>
        <div className={styles.showTodoList}>
          {toDoList.map((element, key) => {
            return <div key={key}>{element}</div>
          }) }
        </div>
      </div>
  );
}

export default TodoList;
