import React, { useState } from "react";
import { TodoStoreImpl } from "../../page/TodoStorage";
import styles from "./AddElement.module.css";

interface TodoList {
	todoStore: TodoStoreImpl;
}

interface ResultType {
	number: number;
	string: string;
}

const AddElement: React.FC<TodoList> = ({ todoStore }) => {
	const [title, setTitle] = useState<string>("");
	const [result, setResult] = useState<ResultType>({
		number: 0,
		string: '""',
	});
	const handleSubmit = (title: string) => {
		if (title === "") {
			return alert("You must write something!");
		}
		todoStore.addTodo(title);
		return setTitle("");
	};

	const handleSum = () => {
		setResult({
			number: todoStore.sumAll().number,
			string: todoStore.sumAll().string,
		});
	};

	return (
		<div className={styles.addComponent}>
			<form
				id='addForm'
				className={styles.formContainer}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(title);
				}}>
				<input
					type='text'
					placeholder='Title...'
					className={styles.inputField}
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<div className={styles.btnContainer}>
					<button className={`${styles.btn} ${styles.add}`} type='submit'>
						Add
					</button>
					<button
						className={`${styles.btn} ${styles.sum}`}
						type='button'
						onClick={() => handleSum()}>
						Sum
					</button>
				</div>
			</form>
			<div className={styles.showResult}>
				<p className={styles.showNumber}>
					Total Sum of Number: {result.number}
				</p>
				<p className={styles.showText}>
					Concat of All String: {result.string === "" ? '" "' : result.string}
				</p>
			</div>
		</div>
	);
};

export default AddElement;
