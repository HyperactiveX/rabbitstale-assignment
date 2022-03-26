import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import AddElement from "../components/AddElement/AddElement";
import ShowTodoList from "../components/ShowList/ShowTodoList";
import { ToDoType } from "../types/Types";

function TodoList() {
	const [toDoList, setToDoList] = useState<ToDoType[]>([
		{ title: "", state: false },
	]);

	const renderTodoList = () => {
		return toDoList.map((element, key) => {
			return (
				<ShowTodoList
					key={key}
					position={key}
					element={element}
					setList={setToDoList}
				/>
			);
		});
	};

	// useEffect(() => {
	// 	renderTodoList();
	// }, [toDoList]);

	return (
		<div className={styles.page}>
			<div className={styles.addTodoList}>
				<h1>My Todo List</h1>
				<AddElement setList={setToDoList} getList={toDoList} />
			</div>
			<div className={styles.showTodoList}>{renderTodoList()}</div>
		</div>
	);
}

export default TodoList;
