import React, { Fragment, useState } from "react";
import { SumResultType, ToDoType } from "../../types/Types";
import styles from "./AddElement.module.css";

type Prop = {
	getList: ToDoType[];
	setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const AddElement: React.FC<Prop> = ({ getList, setList }) => {
	const [title, setTitle] = useState<string>("");
	const [sumResult, setSumResult] = useState<SumResultType>({
		number: 0,
		string: "",
	});

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
		setSumResult({ number: sumAllNumber(list), string: concatAllString(list) });
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
						onClick={() => sumAll(getList)}>
						Sum
					</button>
				</div>
			</form>
			<div className={styles.showResult}>
				<p className={styles.showNumber}>
					Total Sum of Number: {sumResult.number}
				</p>
				<p className={styles.showText}>
					Concat of All String:{" "}
					{sumResult.string === "" ? '" "' : sumResult.string}
				</p>
			</div>
		</div>
	);
};

export default AddElement;
