import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { tap } from 'rxjs/operators';
import { contentArray } from './helper-files/contentDb';
import { MessageService } from './services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class FavGamesService {
  private apiUrl = 'api/content';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { }
  
  // get content from sim server
  getContentArray(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return this.http.get<Content[]>(this.apiUrl);
  }

  // content by id
  getContentById(id: number): Observable<Content> {
    this.messageService.add(`Content Item at id: ${id} retrieved`);
    return this.http.get<Content>(`${this.apiUrl}/${id}`);    
  }

  // new content item to server
  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content).pipe(tap(() => {
      this.messageService.add(`New content added with title: ${content.title}`);
    }));
  }

  // update existing content
  updateContent(content: Content): Observable<any> {
    return this.http.put(this.apiUrl, content).pipe(tap(() => {
      this.messageService.add(`Content updated with id: ${content.id}`);
    }));
  }

  // delete content via ID
  deleteContent(id: number): Observable<Content> {
    return this.http.delete<Content>(`${this.apiUrl}/${id}`).pipe(tap(() => {
      this.messageService.add(`Content deleted with id: ${id}`);
    }));
  }
}