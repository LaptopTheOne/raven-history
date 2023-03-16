import { Component } from '@angular/core';
// import { data } from './test-data';
import { data } from './test-data-grouped';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testData = data;
}
