import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  imports: [CommonModule], 
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
}