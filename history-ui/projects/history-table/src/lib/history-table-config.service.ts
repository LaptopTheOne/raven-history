import { InjectionToken } from '@angular/core';

export interface HistoryTableConfig {
  historyUrl: string;
}

export const HistoryTableConfigService = new InjectionToken<HistoryTableConfig>('HistoryTableConfig');