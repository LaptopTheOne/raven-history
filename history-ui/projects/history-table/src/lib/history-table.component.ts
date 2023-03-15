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
  @Input()
  savedItems: SavedItem[] = [];
  done: SavedItem[] = [];

  listOfSubreddits = ['subreddit_1', 'subreddit_2', 'subreddit_3', 'subreddit_4', 'subreddit_5', 'subreddit_6',];

  public ngOnInit(): void {
    this.savedItems.forEach(item => console.log(item))
  }

  drop(event: CdkDragDrop<SavedItem[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
