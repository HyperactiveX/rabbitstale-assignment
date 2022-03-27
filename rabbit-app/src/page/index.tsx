import React from "react";
import styles from "./Index.module.css";
import AddElement from "../components/AddElement/AddElement";
import ShowTodoList from "../components/ShowList/ShowTodoList";
import { TodoStoreImpl } from "./TodoStorage";
import { observer } from "mobx-react";

interface TodoProp {
	todoStore: TodoStoreImpl;
}

export const TodoList: React.FC<TodoProp> = observer(({ todoStore }) => {
	const renderTodoList = () => {
		return todoStore.todoList.map((todo, key) => {
			return (
				<ShowTodoList
					key={key}
					position={key}
					title={todo.title}
					completed={todo.completed}
					onDelete={() => todoStore.deleteTodo(todo.id)}
					onChange={() => todoStore.changeStatus(todo.id)}
				/>
			);
		});
	};

	return (
		<div className={styles.page}>
			<div className={styles.addTodoList}>
				<div className={styles.addContainer}>
					<h1 className={styles.title}>My Todo List</h1>
					<AddElement todoStore={todoStore} />
				</div>
			</div>
			<div className={styles.showTodoList}>{renderTodoList()}</div>
		</div>
	);
});
