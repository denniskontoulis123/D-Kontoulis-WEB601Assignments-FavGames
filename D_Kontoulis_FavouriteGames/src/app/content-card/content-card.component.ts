import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgIf } from '@angular/common';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content | any;
  @Input() cardClass: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleClick(contentLog: Content): void {
    console.log(`ID: ${contentLog.id}, TITLE: ${contentLog.title}`);
  }
}