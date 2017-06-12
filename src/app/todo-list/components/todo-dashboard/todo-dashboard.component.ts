import { Component, Input, Output, OnInit, Injectable, EventEmitter } from '@angular/core';

import { Item } from '../../models/item.interface';

import { todoListService } from '../../todo-list.service';

import { todoListAddComponent } from '../../components/todo-add/todo-add.component';
import { todoListDetailComponent } from '../../components/todo-detail/todo-detail.component';

@Component(
    {
        selector:'todo-dashboard',
        styleUrls: ['./todo-dashboard.component.scss'],
        template:
         `
        <div class="inputs-row">
        <todo-list-add
        (add)="handleAdd($event)">
        </todo-list-add>
        <button md-raised-button color="primary" (click)="toggleHideCompleted()">
           {{ hideCompleted ? 'Show Completed' : 'Hide Completed' }}
        </button>
        </div>
        <p class="tip">Double-click to Edit</p>
        <div class="list-row">
        <ul class="main-list">
           <todo-detail 
           *ngFor="let item of items;"
            [details]="item"
            (update)="handleUpdate($event)"
            (edit)="handleUpdate($event)"
            [class.hide]="isCompleted(item)">
            </todo-detail>            
        </ul>
        </div>
        `
    }
)
@Injectable()
export class todoDashboardComponent{
    constructor(private todoService: todoListService){}

    @Input()
    items: Item[];

    @Input()
    hideCompleted: boolean = true;

    ngOnInit(){
        this.todoService.getItems()
        .subscribe((data: Item[]) => this.items = data);
    }

    toggleHideCompleted(){
        this.hideCompleted = !this.hideCompleted;
    };

    isCompleted(item: Item):boolean{
        if(this.hideCompleted && item.completed ){
            return true;
        }else{
            return false;
        }
    }

    handleAdd(name: string){
        var id = this.items.length + 1;
        console.log(id);
        var item: Item = {
            'name': name,
            'id': id,
            'completed': false,
            'timeCompleted': null
        }

        this.todoService.addItem(item)
        .subscribe((data: Item) => {
            this.items.push(data);
        })
    }

     handleUpdate(details: Item){
        this.todoService
        .updateItem(details)
        .subscribe((data: Item) => {

            this.items = this.items.map((item: Item) => {
            if(item.id === details.id) {
                item = Object.assign({}, item, event);
            }
            return item;
            });

        })
    
  };

}