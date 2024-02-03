import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{
  public contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    // content items below
    this.contentList.addContent({
      id: 1,
      title: "Tekken 8",
      description: "A 3D fighting game",
      creator: "Bandai Namco",
      imgURL: "http://example.com/image1.jpg"
    });
    this.contentList.addContent({
      id: 2,
      title: "Guilty Gear Strive",
      description: "A 2D anime-style fighting game",
      creator: "Arcsystem Works",
      type: "Second Type"
    });
    this.contentList.addContent({
      id: 3,
      title: "Street Fighter 6",
      description: "A 2D fighting game for next-gen consoles",
      creator: "Capcom",
      tags: ["Tag1", "Tag2"]
    });
  }

  ngOnInit(): void {
  }

  getContentHtml(index: number): string {
    return this.contentList.getContentHtml(index);
  }
}


