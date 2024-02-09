import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "An action-adventure game set in an expansive open world.",
      creator: "Nintendo",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg", 
      type: "Action-Adventure",
      tags: ["Open World", "Fantasy", "Exploration"]
    },
    {
      id: 2,
      title: "Elden Ring",
      description: "A fantasy action-RPG adventure set within a world full of intrigue and danger.",
      creator: "FromSoftware",
      imgURL: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png", 
      type: "Action RPG",
      tags: ["Dark Fantasy", "Open World", "Souls-like"]
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      description: "Kratos and Atreus embark on a mythic journey in the realms of Norse gods.",
      creator: "Santa Monica Studio",
      imgURL: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png", 
      type: "Action",
      tags: ["Mythology", "Adventure", "Narrative"]
    },
    {
      id: 4,
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
      creator: "CD Projekt",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", 
      type: "RPG",
      tags: ["Cyberpunk", "Open World", "Story-rich"]
    },
    {
      id: 5,
      title: "Halo Infinite",
      description: "The Master Chief returns to explore the epic expanse of a Halo ring and fight against the Banished.",
      creator: "343 Industries",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png", 
      type: "First-Person Shooter",
      tags: ["Sci-Fi", "Multiplayer", "Shooter"]
    },
    {
      id: 6,
      title: "Final Fantasy XV",
      description: "A fantasy based on reality, following the journey of Noctis and his friends across the land of Eos.",
      creator: "Square Enix",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg", 
      type: "JRPG",
      tags: ["Fantasy", "Open World", "Adventure"]
    },
    {
      id: 7,
      title: "Super Mario Odyssey",
      description: "Join Mario on a massive, globe-trotting 3D adventure!",
      creator: "Nintendo",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg", 
      // no type set per inst
      tags: ["3D", "Adventure", "Platformer"]
    },
    {
      id: 8,
      title: "The Witcher 3: Wild Hunt",
      description: "An open world action role-playing game developed by CD Projekt.",
      creator: "CD Projekt",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg", 
      // no type set per inst
      tags: ["Open World", "Story-rich", "Fantasy"]
    }
  ];
  types: string[] = []; // array for unique types
  searchTitle: string = ''; // input field for search
  searchResultMessage: string = ''; // msg for search
  searchResultColor: string = ''; // color for search

  ngOnInit(): void {
    // extract unique types
    this.types = Array.from(new Set(this.contents.map(content => content.type || '')));
  }

  // search for item via title
  searchByTitle(): void {
    const foundContent = this.contents.find(content => content.title === this.searchTitle);
    if (foundContent) {
      this.searchResultMessage = `Content with title "${this.searchTitle}" found!`;
      this.searchResultColor = 'green';
    } else {
      this.searchResultMessage = `Content with title "${this.searchTitle}" not found!`;
      this.searchResultColor = 'red';
    }
  }
}
