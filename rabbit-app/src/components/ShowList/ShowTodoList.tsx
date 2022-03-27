import React from "react";
import styles from "./ShowTodoList.module.css";

type TodoList = {
	title: string;
	position: number;
	completed: boolean;
	onDelete: CallableFunction;
	onChange: CallableFunction;
};

const ShowTodoList: React.FC<TodoList> = ({
	title,
	completed,
	position,
	onDelete,
	onChange,
}) => {
	const handleDelete = () => onDelete;
	const handleState = () => onChange;

	return (
		<>
			{title !== "" && (
				<div
					className={
						completed ? `${styles.list} ${styles.active}` : styles.list
					}
					style={{
						background: position % 2 === 0 ? "#f9f9f9" : "#E7E9EB",
					}}>
					<div className={styles.icon}>
						<i className='fa-solid fa-check'></i>
					</div>
					<span className={styles.content} onClick={() => handleState()}>
						{title}
					</span>
					<span className={styles.closeBtn} onClick={() => handleDelete()}>
						×
					</span>
				</div>
			)}
		</>
	);
};
export default ShowTodoList;
