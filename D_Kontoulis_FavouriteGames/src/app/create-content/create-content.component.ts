import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentFilterPipe } from '../content-filter/content-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, HoverAffectDirective],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

}
