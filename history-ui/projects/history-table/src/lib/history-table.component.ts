import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
export class HistoryTableComponent implements OnInit {
  private _savedItems: any = {};

  @Input()
  public set savedItems(items: any) {
    this._savedItems = items;
    this.refreshSavedItems();
  }

  redditLists: any = {};
  maxNumberOfRedditLists = 0;
  numOfSelectedSubreddits = 0;

  listOfSubreddits: string[] | null = null;
  listOfSelectedSubreddits: any[] | null = null;

  public ngOnInit(): void {
    this.maxNumberOfRedditLists = Math.floor(window.innerWidth / 250) - 1;
    this.refreshSavedItems();
  }

  refreshSavedItems() {
    this.listOfSubreddits = Object.keys(this._savedItems);
    this.listOfSelectedSubreddits = new Array(this.maxNumberOfRedditLists).fill({
      subredditName: null,
      savedItems: null
    })
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
