import { Component, Output, EventEmitter } from '@angular/core';
import { FavGamesService } from '../fav-games.service';
import { MessageService } from '../services/messages.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss'],
  standalone: true,
  imports: []
})
export class ModifyContentComponent {
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
    if (this.newContent.title) { // Simple validation example
      this.favGamesService.addContent(this.newContent).subscribe({
        next: (content) => {
          this.messageService.add(`Content added successfully: ${content.title}`);
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