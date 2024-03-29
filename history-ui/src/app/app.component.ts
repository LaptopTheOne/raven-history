import { Component, ViewChild } from '@angular/core';
// import { data } from './test-data';
import { data } from './test-data-grouped';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // testData: any = {};
  testData: any = data;
  redditHistoryToken: string | null = null;
  username: string | null = null;

  resetData() {
    this.testData = {};
    this.username = null;
    this.redditHistoryToken = null;
  }

  setTestData() {
    this.testData = data;
  }

  setRealData() {
    this.username = 'LaptopTheOne';
    this.redditHistoryToken = '44467232--uHfXHNdnzDQESXGhBNDju4mZf-pDA';
  }
}
