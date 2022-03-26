import React, { useState } from "react";
import { ToDoType } from "../../types/Types";
import styles from "./AddElement.module.css";

type Prop = {
	setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const AddElement: React.FC<Prop> = ({ setList }) => {
	const [title, setTitle] = useState("");
	const handleClick = (title: string) => {
		if (title === "") {
			return alert("You must write something!");
		}
		setList((list) => [...list, { title: title, state: false }]);
		return setTitle("");
	};

	return (
		<div className={styles.addComponent}>
			<input
				type='text'
				placeholder='Title...'
				className={styles.inputField}
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<button className={styles.addButton} onClick={() => handleClick(title)}>
				Add
			</button>
		</div>
	);
};

export default AddElement;
