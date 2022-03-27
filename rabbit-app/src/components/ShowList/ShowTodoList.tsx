import { observer } from "mobx-react";
import React from "react";
import styles from "./ShowTodoList.module.css";

type TodoList = {
	title: string;
	position: number;
	completed: boolean;
	onDelete: CallableFunction;
	onChange: CallableFunction;
};

const ShowTodoList: React.FC<TodoList> = observer(
	({ title, completed, position, onDelete, onChange }) => {
		return (
			<>
				{title !== "" && (
					<div
						className={
							completed ? `${styles.list} ${styles.completed}` : styles.list
						}
						style={{
							background: position % 2 === 0 ? "#f9f9f9" : "#E7E9EB",
						}}>
						<div className={styles.icon}>
							<i className='fa-solid fa-check'></i>
						</div>
						<span className={styles.content} onClick={() => onChange()}>
							{title}
						</span>
						<span className={styles.closeBtn} onClick={() => onDelete()}>
							×
						</span>
					</div>
				)}
			</>
		);
	}
);
export default ShowTodoList;
