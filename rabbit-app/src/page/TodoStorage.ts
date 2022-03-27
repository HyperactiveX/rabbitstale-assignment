import { action, makeObservable, observable } from "mobx";


interface TodoItem {
    title: string;
    completed: boolean;
}

export class TodoStoreImpl {
    todoList: TodoItem[] = [];

    constructor() {
        makeObservable(this, {
            todoList: observable,
            addTodo: action,
            getTodo: observable,
            deleteTodo: observable,
            changeStatus: action,
            concatAllString: observable,
            sumAll: observable
        })
    }

    addTodo(title: string) {
        const item: TodoItem = {
            title: title,
            completed: false
        }

        this.todoList.push(item)
    }
    getTodo() {
        return this.todoList
    }
    deleteTodo(position: number) {
        this.todoList.filter((items, index) => index !== position)
    }
    changeStatus(position: number) {
        this.todoList.map((element, key) => {
            return key !== position
                ? element
                : { title: element.title, completed: !element.completed };
        })
    }
    sumAllNumber() {
        let result = this.todoList
        .map((element, index) => {
            let title = parseFloat(element.title);
            return isNaN(title) ? 0 : title;
        })
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        
        return result;
    }
    concatAllString() {
        let result = this.todoList
			.map((element, index) => {
				let title = element.title;
				return isNaN(parseInt(title)) ? title : "";
			})
			.reduce((prev, curr) => prev + curr, "");

        return result;    
    }
    sumAll() {
        return {number: this.sumAllNumber(), string: this.concatAllString()}
    }
}

export const TodoStore = new TodoStoreImpl();