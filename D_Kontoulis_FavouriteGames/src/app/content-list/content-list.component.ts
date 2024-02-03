import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contents: Content[] = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "An action-adventure game set in an expansive open world.",
      creator: "Nintendo",
      imgURL: "https://example.com/zelda.jpg", // Replace with actual image URL
      type: "Action-Adventure",
      tags: ["Open World", "Fantasy", "Exploration"]
    },
    {
      id: 2,
      title: "Elden Ring",
      description: "A fantasy action-RPG adventure set within a world full of intrigue and danger.",
      creator: "FromSoftware",
      imgURL: "https://example.com/eldenring.jpg", // Replace with actual image URL
      type: "Action RPG",
      tags: ["Dark Fantasy", "Open World", "Souls-like"]
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      description: "Kratos and Atreus embark on a mythic journey in the realms of Norse gods.",
      creator: "Santa Monica Studio",
      imgURL: "https://example.com/gowragnarok.jpg", // Replace with actual image URL
      type: "Action",
      tags: ["Mythology", "Adventure", "Narrative"]
    },
    {
      id: 4,
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
      creator: "CD Projekt",
      imgURL: "https://example.com/cyberpunk2077.jpg", // Replace with actual image URL
      type: "RPG",
      tags: ["Cyberpunk", "Open World", "Story-rich"]
    },
    {
      id: 5,
      title: "Halo Infinite",
      description: "The Master Chief returns to explore the epic expanse of a Halo ring and fight against the Banished.",
      creator: "343 Industries",
      imgURL: "https://example.com/haloinfinite.jpg", // Replace with actual image URL
      type: "First-Person Shooter",
      tags: ["Sci-Fi", "Multiplayer", "Shooter"]
    },
    {
      id: 6,
      title: "Final Fantasy XV",
      description: "A fantasy based on reality, following the journey of Noctis and his friends across the land of Eos.",
      creator: "Square Enix",
      imgURL: "https://example.com/ffxv.jpg", // Replace with actual image URL
      type: "JRPG",
      tags: ["Fantasy", "Open World", "Adventure"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

}
