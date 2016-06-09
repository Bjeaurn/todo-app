import {Todo} from './todo';

export class List {
    public id:number;
    public title:string;
    public todos:Todo[];

    constructor(title:string, list:Todo[]) {
        this.title = title;
        this.todos = list;
    }
}