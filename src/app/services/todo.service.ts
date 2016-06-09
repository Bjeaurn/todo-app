import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Todo }           from '../todo/todo';
import { List }           from '../todo/list';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TodoService {
    private headers:Headers;

    constructor(private http:Http) {}

    private todoUrl = 'http://localhost:5000/test';

    getTest() : Observable<List[]> {
        this.headers = new Headers();
        this.headers.append("Content-Type", "text/json");
        return this.http.get(this.todoUrl, this.headers)
                        .map(this.extractData)
                        .catch(this.handleError);     
    }

    private extractData(res: Response) {
        let body = res.json();
        //console.log(body);
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}