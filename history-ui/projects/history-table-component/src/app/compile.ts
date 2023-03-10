// projects/dialer-component/src/app/compile.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'zone.js';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));