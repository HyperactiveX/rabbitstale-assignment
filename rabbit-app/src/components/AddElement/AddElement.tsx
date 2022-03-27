import React, { useState } from "react";
import { SumResultType, ToDoType } from "../../types/Types";
import styles from "./AddElement.module.css";

type Prop = {
	getList: ToDoType[];
	setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
	setSum: React.Dispatch<React.SetStateAction<SumResultType>>;
};

const AddElement: React.FC<Prop> = ({ getList, setList, setSum }) => {
	const [title, setTitle] = useState<string>("");

	const handleSubmit = (title: string) => {
		if (title === "") {
			return alert("You must write something!");
		}
		setList((list) => [...list, { title: title, state: false }]);
		return setTitle("");
	};

	const sumAllNumber = (list: ToDoType[]) => {
		return list
			.map((element, index) => {
				let title = parseInt(element.title);
				return isNaN(title) ? 0 : title;
			})
			.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
	};

	const concatAllString = (list: ToDoType[]) => {
		return list
			.map((element, index) => {
				let title = element.title;
				return isNaN(parseInt(title)) ? title : "";
			})
			.reduce((prev, curr) => prev + curr, "");
	};
	const sumAll = (list: ToDoType[]) => {
		setSum({ number: sumAllNumber(list), string: concatAllString(list) });
	};

	return (
		<div className={styles.addComponent}>
			<form
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
				<button className={`${styles.btn} ${styles.add}`} type='submit'>
					Add
				</button>
			</form>
			<button
				className={`${styles.btn} ${styles.sum}`}
				onClick={() => sumAll(getList)}>
				Sum
			</button>
		</div>
	);
};

export default AddElement;
