import {Component} from '@angular/core';

import {List} from './list';
import {TodoListComponent} from './list.component';
import {Todo} from './todo';
import {TodoService} from '../services/todo.service';

@Component({
    selector: 'todo-app',
    templateUrl: './src/app/todo/browser.html',
    directives: [TodoListComponent],
    providers: [TodoService]
})
export class TodoBrowserComponent {
    public lists:List[] = [];
    public errorMessage:any;

    constructor(private todoService:TodoService) {
        /*this.lists = [
            new List("List 1", [
    new Todo("Taak 1"),
    new Todo("Taak 2")
]),
            new List("Mijn lijst", [
    new Todo("Taak 1"),
    new Todo("Taak 2")
])
        ]*/
        this.todoService.getTest()
                   .subscribe(
                     lists => this.lists = lists,
                     error =>  this.errorMessage = <any>error);
        console.log(this.lists);
    }

}