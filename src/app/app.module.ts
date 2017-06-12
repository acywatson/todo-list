import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { todoDashboardComponent } from './todo-list/components/todo-dashboard/todo-dashboard.component';
import { todoListAddComponent } from './todo-list/components/todo-add/todo-add.component';
import { todoListDetailComponent } from './todo-list/components/todo-detail/todo-detail.component';

import { MdCheckboxModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import { todoListService } from './todo-list/todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    todoDashboardComponent,
    todoListAddComponent,
    todoListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
  ],
  providers: [
    todoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
