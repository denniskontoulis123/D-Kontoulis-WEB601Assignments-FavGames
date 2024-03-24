import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const content = contentArray;
    return { content };
  }

  genId(contents: Content[]): number {
    const ids = contents
      .map(c => c.id as number) // Coerce id to number, implicitly excluding nulls
      .filter(id => id != null); 
    return ids.length > 0 ? Math.max(...ids) + 1 : 2000;
  }
}