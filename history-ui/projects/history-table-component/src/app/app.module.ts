import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { HistoryTableComponent } from 'projects/history-table/src/public-api';
import { HistoryTableModule } from 'projects/history-table/src/lib/history-table.module';

// This abstract class is then implemented by our main module. It generates an HTML element
export abstract class WebComponentModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    const ngElement = createCustomElement(component, {
      injector,
    });
    // change the first parameter to change the name of the HTML tag generated
    customElements.define(`raven-${name}`, ngElement);
  }

  public ngDoBootstrap(): void { }
}

// Define your module with your DialerModule as an entry component.
@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    HistoryTableModule,
  ],
  entryComponents: [HistoryTableComponent],
  exports: [HistoryTableModule]
})
export class AppModule extends WebComponentModule {

  constructor(
    readonly injector: Injector,
  ) {
    super(injector, HistoryTableComponent, 'history-table');
  }
}

