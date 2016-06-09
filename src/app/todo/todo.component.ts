import {Component, Input} from '@angular/core';

import {Todo} from './todo';

@Component({
    selector: 'todo',
    templateUrl: './src/app/todo/todo.html',
    styles: [`
        .completed { color: gray; font-weight: normal; }
        .completed > span { text-decoration: line-through; }
    
    `]
})
export class TodoComponent {
    @Input() todo:Todo;
}