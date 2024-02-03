import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content | any;

  constructor() {}

  ngOnInit(): void {}

  handleClick(contentLog: Content): void {
    console.log(`ID: ${contentLog.id}, TITLE: ${contentLog.title}`);
  }
}