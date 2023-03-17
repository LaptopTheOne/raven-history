import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HistoryTableService } from './history-table.service';
import { Subscription } from 'rxjs';

interface SavedItem {
  subreddit?: string | null,
  title?: string | null,
  link_flair_text?: string | null,
  url?: string | null
}

@Component({
  selector: 'lib-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements OnInit, OnDestroy, OnChanges {
  private _savedItems: any = {};
  private _redditHistoryToken: string | null = null;
  private _username: string | null = null;
  subscription: Subscription = new Subscription();

  // TO BE REMOVED
  @Input()
  public set savedItems(items: any) {
    this._savedItems = items;
    this.listOfSubreddits = Object.keys(this._savedItems);
    this.listOfSelectedSubreddits = new Array(this.maxNumberOfRedditLists).fill({
      subredditName: null,
      savedItems: null
    })
  }

  @Input()
  public set redditHistoryToken(token: string | null) {
    this._redditHistoryToken = token;
  }

  @Input()
  public set username(username: string | null) {
    this._username = username;
  }

  redditLists: any = {};
  maxNumberOfRedditLists = 0;
  numOfSelectedSubreddits = 0;

  listOfSubreddits: string[] | null = null;
  listOfSelectedSubreddits: any[] | null = null;

  constructor(private historyService: HistoryTableService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.maxNumberOfRedditLists = Math.floor(window.innerWidth / 250) - 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    if (this._redditHistoryToken && this._username) {
      console.log('Calling API...')
      this.refreshSavedItems();
    }
  }

  refreshSavedItems() {
    this.subscription.add(
      this.historyService.getSavedItems(this._username, this._redditHistoryToken).subscribe(result => {
        this._savedItems = result;
        this.listOfSubreddits = Object.keys(this._savedItems);
        this.listOfSelectedSubreddits = new Array(this.maxNumberOfRedditLists).fill({
          subredditName: null,
          savedItems: null
        })
      }, err => {
        console.log('error', err)
      }))
  }

  selectSubreddit($event: any) {
    const checked = $event.target.checked;
    const value = $event.target.value;

    if (checked) {
      if (this.numOfSelectedSubreddits == this.maxNumberOfRedditLists) {
        $event.target.checked = false;
      } else {
        this.redditLists[value] = this._savedItems[value];
        this.numOfSelectedSubreddits++;
      }
    } else {
      this.numOfSelectedSubreddits--;
      delete this.redditLists[value];
    }
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
