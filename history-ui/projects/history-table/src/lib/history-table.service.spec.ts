import { TestBed } from '@angular/core/testing';

import { HistoryTableService } from './history-table.service';

describe('HistoryTableService', () => {
  let service: HistoryTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
