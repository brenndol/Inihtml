import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiServiceService {

  constructor(private http: HttpClient) { }

  getResults(query: string) {
    return this.http.get<any>(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`);
  }
}
