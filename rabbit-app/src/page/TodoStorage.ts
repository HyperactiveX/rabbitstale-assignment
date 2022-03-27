import { action, makeObservable, observable } from "mobx";


interface TodoItem {
    id: string,
    title: string;
    completed: boolean;
}

const UUID = () => {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export class TodoStoreImpl {
    todoList: TodoItem[] = [];

    constructor() {
        makeObservable(this, {
            todoList: observable,
            addTodo: action,
            getTodo: observable,
            deleteTodo: action,
            changeStatus: action,
            concatAllString: observable,
            sumAll: observable
        })
    }

    addTodo(title: string) {
        const item: TodoItem = {
            id: UUID(),
            title: title,
            completed: false
        }

        this.todoList.push(item)
    }
    getTodo() {
        return this.todoList
    }
    deleteTodo(id: string) {
        this.todoList = [...this.todoList.filter((items, index) => items.id !== id)]
    }
    changeStatus(id: string) {
        this.todoList = [...this.todoList.map((element, key) => {
            return element.id !== id
                ? element
                : {id: element.id, title: element.title, completed: !element.completed };
        })]
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