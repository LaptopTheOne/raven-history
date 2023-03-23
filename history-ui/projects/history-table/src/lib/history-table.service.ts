import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HistoryTableConfig, HistoryTableConfigService } from './history-table-config.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryTableService {
  private historyTableConfig: HistoryTableConfig;
  constructor(
    private http: HttpClient,
    @Inject(HistoryTableConfigService) private config: HistoryTableConfig
  ) {
    this.historyTableConfig = config;
  }

  private generateSavedItemsUrl(username: string | null, token: string | null) {
    return `${this.getConfig().historyUrl}${token}&username=${username}`
  }

  getSavedItems(username: string | null, token: string | null) {
    return this.http.get(this.generateSavedItemsUrl(username, token));
  }

  getConfig(): HistoryTableConfig {
    return this.historyTableConfig;
  }
}
