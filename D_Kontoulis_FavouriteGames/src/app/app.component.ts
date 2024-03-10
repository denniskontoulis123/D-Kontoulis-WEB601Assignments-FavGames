import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/messages/messages.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentCardComponent, ContentListComponent, RouterOutlet, FormsModule, CommonModule, MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Kontoulis_FavouriteGames';
}
