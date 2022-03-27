import React from "react";
import { TodoList } from "./page/index";
import { TodoStore } from "./page/TodoStorage";

function App() {
	return <TodoList todoStore={TodoStore} />;
}

export default App;
