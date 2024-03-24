import { Component, Output, EventEmitter } from '@angular/core';
import { FavGamesService } from '../fav-games.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
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