import { Component } from '@angular/core';
import { ContentCardComponent } from '../app/content-card/content-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'D_Kontoulis_FavouriteGames';
}
