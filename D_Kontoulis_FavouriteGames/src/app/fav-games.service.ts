import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';
import { MessageService } from './services/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class FavGamesService {

  constructor(private messageService: MessageService) { }

  getContentArray(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = contentArray.find(c => c.id === id);
    this.messageService.add(`Content Item at id: ${id} retrieved`);
    return of(content);
  }
}