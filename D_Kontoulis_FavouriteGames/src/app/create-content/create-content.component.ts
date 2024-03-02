import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };
  tagInput: string = '';

  addContent(): void {
    console.log(this.newContent);
    this.resetForm();
  }

  updateTags(): void {
    this.newContent.tags = this.tagInput.split(',').map(tag => tag.trim()); 
  }

  private resetForm(): void {
    this.newContent = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] };
    this.tagInput = ''; 
  }
}