import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HistoryTableComponent } from './history-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HistoryTableConfig, HistoryTableConfigService } from './history-table-config.service';


@NgModule({
  declarations: [
    HistoryTableComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule
  ],
  exports: [
    HistoryTableComponent
  ]
})
export class HistoryTableModule {
  static forRoot(config: HistoryTableConfig): ModuleWithProviders<HistoryTableModule> {
    return {
      ngModule: HistoryTableModule,
      providers: [
        {
          provide: HistoryTableConfigService,
          useValue: config
        }
      ]
    };
  }
}
