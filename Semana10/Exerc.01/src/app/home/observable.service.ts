import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getNumeros(): Observable<number> {
    return new Observable<number>((subscriber) => {
      for (let i = 1; i <= 100; i++) {
        subscriber.next(i);
      }
      subscriber.complete();
    });
  }

}
