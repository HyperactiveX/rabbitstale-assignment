import React from "react";
import { ToDoType } from "../../types/Types";
import styles from "./ShowTodoList.module.css";

type Prop = {
	position: number;
	element: ToDoType;
	setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const ShowTodoList: React.FC<Prop> = ({ position, element, setList }) => {
	const handleDelete = (position: number) => {
		return setList((list) => list.filter((items, index) => index !== position));
	};

	const handleState = () => {
		setList((list) =>
			list.map((element, key) => {
				return key !== position
					? element
					: { title: element.title, state: !element.state };
			})
		);
	};

	return (
		<>
			{element.title !== "" && (
				<div
					className={
						element.state ? `${styles.list} ${styles.active}` : styles.list
					}
					style={{
						background: position % 2 === 0 ? "#f9f9f9" : "#E7E9EB",
					}}>
					<div className={styles.icon}>
						<i className='fa-solid fa-check'></i>
					</div>
					<span className={styles.content} onClick={() => handleState()}>
						{element.title}
					</span>
					<span
						className={styles.closeBtn}
						onClick={() => handleDelete(position)}>
						×
					</span>
				</div>
			)}
		</>
	);
};

export default ShowTodoList;
