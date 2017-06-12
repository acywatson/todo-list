import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div>
  <h1 class="main-title">To Do List</h1>
  <todo-dashboard></todo-dashboard>
</div>
  `
})
export class AppComponent {
  title = 'app works!';
}
