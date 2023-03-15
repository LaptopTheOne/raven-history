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

  public ngOnInit(): void {
    this.savedItems.forEach(item => console.log(item))
  }

  drop(event: CdkDragDrop<SavedItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
