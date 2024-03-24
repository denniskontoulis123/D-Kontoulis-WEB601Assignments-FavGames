import { Component, Output, EventEmitter } from '@angular/core';
import { FavGamesService } from '../fav-games.service';
import { MessageService } from '../services/messages.service';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
  standalone: true,
  imports: [FormsModule /* MessageService, FavGamesService */]
})
export class ModifyContentComponent {
  // chatgpt says to use an intermediate string to handle tag input since i keep erroring out. hoping this fixes lol.
  tagInput: string = '';

  newContent: Content = {
    id: null, // id is null initially
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(
    private favGamesService: FavGamesService, 
    private messageService: MessageService
  ) { }

  addContent(): void {
    const tags = this.tagInput.split(',').map(tag => tag.trim());
    this.newContent.tags = tags;

    if (this.newContent.title) {
      this.favGamesService.addContent(this.newContent).subscribe({
        next: (content) => {
          this.contentAdded.emit(content); 
          this.messageService.add(`Content added successfully: ${content.title}`);
          
          this.tagInput = '';
          this.newContent = { id: null, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] }; 
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.messageService.add('Error adding content: ' + (error.message || 'Unknown error'));
        }
      });
    } else {
      this.messageService.add('Please provide a title for the content.'); 
    }
  }
}