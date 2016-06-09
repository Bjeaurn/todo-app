export class Todo {
    public id:number;
    public title:string;
    private completed:boolean;

    constructor(title:string) {
        this.title = title;
        this.completed = false;
    }

    check():void {
        this.completed = !this.completed;
    }

    isCompleted():boolean {
        return this.completed;
    }
}