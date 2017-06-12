import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Item } from '../todo-list/models/item.interface';

const TODO_LIST_API: string = "http://localhost:3000/items";

@Injectable()
export class todoListService{

    constructor(private http: Http){}

    getItems(): Observable<Item[]>{
        return this.http
        .get(TODO_LIST_API)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()))
    }

    getItemCount(): number{
        var items;
        this.getItems()
        .subscribe((data: Item[]) => items = data);
        console.log(items);
        return items.length;
    }

    addItem(item: Item): Observable<Item>{
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        let options = new RequestOptions({
            headers: headers
        })
        return this.http
        .post(`${TODO_LIST_API}/`, item, options)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()))
    }

    updateItem(item: Item){
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        let options = new RequestOptions({
            headers: headers
        })
        return this.http
        .put(`${TODO_LIST_API}/${item.id}`, item, options)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()))
    }
    
}

