import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HistoryTableComponent } from './history-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HistoryTableComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  exports: [
    HistoryTableComponent
  ]
})
export class HistoryTableModule { }
