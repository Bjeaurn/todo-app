import {Component, Input} from '@angular/core';

import {List} from './list';
import {Todo} from './todo';
import {TodoComponent} from './todo.component';

@Component({
    selector: 'todo-list',
    templateUrl: './src/app/todo/list.html',
    directives: [TodoComponent]
})

export class TodoListComponent {
    @Input() list:List;
    public newInput:string;

    addTodo() {
        if(this.newInput) {
            this.list.todos.unshift(new Todo(this.newInput));
            this.newInput = "";
        }
    }
}