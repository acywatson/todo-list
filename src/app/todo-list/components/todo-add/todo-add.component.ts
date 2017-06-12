import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Item } from '../../models/item.interface';

@Component({
    selector: 'todo-list-add',
    styleUrls: ['./todo-add.component.scss'],
    template:`
        <div>
          <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
            <md-input-container>
            <input
            mdInput 
            type="text"
            name="itemName"
            #itemName="ngModel"
            [ngModel]="item?.itemName"
            [value]="addValue"
            required
            />
            </md-input-container>
            <button md-raised-button color="primary" type="submit">
                Add Item
            </button>
          </form>
        </div>
    `
})
export class todoListAddComponent{

    constructor(){}

    @Output()
    add: EventEmitter<Item> = new EventEmitter();

    @Input()
    addValue: string;

    onSubmit(item){
        this.add.emit(item.itemName);
        this.addValue = '';
    }
}