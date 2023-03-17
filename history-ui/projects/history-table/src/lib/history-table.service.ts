import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const HISTORY_ENDPOINT = 'http://localhost:3001/api/history/get-saved-items?token=';
@Injectable({
  providedIn: 'root'
})
export class HistoryTableService {

  constructor(private http: HttpClient) { }

  private generateSavedItemsUrl(username: string | null, token: string | null) {
    return `${HISTORY_ENDPOINT}${token}&username=${username}`
  }

  getSavedItems(username: string | null, token: string | null) {
    return this.http.get(this.generateSavedItemsUrl(username, token));
  }
}
