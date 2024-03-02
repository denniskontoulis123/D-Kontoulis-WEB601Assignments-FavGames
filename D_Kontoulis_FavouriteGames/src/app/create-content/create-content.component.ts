import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] };
  @Output() contentAdded = new EventEmitter<Content>();

  addContent() {
    new Promise<Content>((resolve, reject) => {
      if (this.newContent.title) { // Simple validation
        resolve(this.newContent);
      } else {
        reject('Content validation failed');
      }
    })
    .then(content => {
      this.contentAdded.emit(content);
      console.log(`Addition successful: ${content.title}`);
      this.newContent = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] }; 
    })
    .catch(error => {
      console.error(error);
    });
  }
}
