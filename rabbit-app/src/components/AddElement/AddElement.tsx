import React, { useState } from "react";
import { ToDoType } from "../../types/Types";
import styles from "./AddElement.module.css";

type Prop = {
	getList: ToDoType[];
	setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const AddElement: React.FC<Prop> = ({ getList, setList }) => {
	const [title, setTitle] = useState("");
	const handleClick = (title: string) => {
		if (title === "") {
			return alert("You must write something!");
		}
		setList((list) => [...list, { title: title, state: false }]);
		return setTitle("");
	};
	const sumAllTodo = (list: ToDoType[]) => {};

	return (
		<div className={styles.addComponent}>
			<input
				type='text'
				placeholder='Title...'
				className={styles.inputField}
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<button
				className={`${styles.btn} ${styles.add}`}
				onClick={() => handleClick(title)}>
				Add
			</button>
			<button
				className={`${styles.btn} ${styles.sum}`}
				onClick={() => sumAllTodo(getList)}>
				Sum
			</button>
		</div>
	);
};

export default AddElement;
