import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentFilterPipe } from '../content-filter/content-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FavGamesService } from '../fav-games.service'; 

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ContentCardComponent, ContentFilterPipe],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];
  types: string[] = [];
  searchTitle: string = '';
  searchResultMessage: string = '';
  searchResultColor: string = '';

  constructor(private favGamesService: FavGamesService) {}

  onContentAdded(newContent: Content): void {
    // push content
    this.contentArray.push(newContent);
  }

  ngOnInit(): void {
    this.favGamesService.getContentArray().subscribe(data => {
      this.contentArray = data;
      // extract unique types
      this.types = Array.from(new Set(this.contentArray.map(content => content.type || '')));
    });
  }

  // search for item via title
  searchByTitle(): void {
    const foundContent = this.contentArray.find(content => content.title === this.searchTitle);
    if (foundContent) {
      this.searchResultMessage = `Content with title "${this.searchTitle}" found!`;
      this.searchResultColor = 'green';
    } else {
      this.searchResultMessage = `Content with title "${this.searchTitle}" not found!`;
      this.searchResultColor = 'red';
    }
  }

  getCardStyle(contentType: string | undefined): string {
    if (!contentType) {
      return 'default-style'; 
    }
    switch (contentType) {
      case 'Action-Adventure':
        return 'action-adventure-style';
      case 'Action RPG':
        return 'action-rpg-style';
      case 'First-Person Shooter':
        return 'fps-style';
      case 'RPG':
        return 'rpg-style';
      default:
        return 'default-style'; 
    }
  }  
}
