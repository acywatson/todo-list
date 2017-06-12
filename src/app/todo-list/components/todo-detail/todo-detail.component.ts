import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { Item } from '../../models/item.interface';

@Component({
    selector: 'todo-detail',
    styleUrls: ['todo-detail.component.scss'],
    template:`
     <li (dblclick)="toggleEditingOn()">
        <md-checkbox
            name="completed" 
            [(ngModel)]="details.completed"
            (ngModelChange)="onUpdate($event)">
            </md-checkbox>
             <span [class.completed]="details.completed">
            <span *ngIf="!editing">
            {{ details.name }} 
            </span>
            <md-input-container  *ngIf="editing">
            <input
            mdInput 
            type="text" 
            [value]="details.name"
            (input)="onNameChange(name.value)"
            (keyup.enter)="toggleEditingOff()"
            #name/>
            </md-input-container>
            <span (click)="toggleEditingOff()" class="done-editing" *ngIf="editing">Done</span>      
        </span>
         <span *ngIf="details.completed">{{ details.timeCompleted }}</span>
     </li>
        `
})
export class todoListDetailComponent{
    constructor(){}

    @Input()
    details: Item

    @Input()
    hideCompleted: boolean = true;

    @Input()
    editing: boolean = false;

    @Output()
    update: EventEmitter<Item> = new EventEmitter();

    @Output()
    edit: EventEmitter<Item> = new EventEmitter();

    onUpdate(completed: boolean){
        this.update.emit(this.details);
    }

    onNameChange(value: string){
        this.details.name = value;
    }

    toggleEditingOn(){
        
        this.editing = true;
    }

    toggleEditingOff(){
        if(this.editing) { 
            this.edit.emit(this.details) 
        }
        this.editing = false;
    }

}