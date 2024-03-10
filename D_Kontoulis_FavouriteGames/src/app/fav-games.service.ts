import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class FavGamesService {

  constructor() { }

  getContentArray(): Observable<Content[]> {
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = contentArray.find(c => c.id === id);
    return of(content);
  }
}
