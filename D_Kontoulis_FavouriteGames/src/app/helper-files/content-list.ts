import { Content } from './content-interface';

export class ContentList {
    private contents: Content[] = [];

    constructor() {
        // sets an empty array obviously
        this.contents = [];
    }

    // getter to return content array
    public getContents(): Content[] {
        return this.contents;
    }

    // function to add Content at the end of the Array
    public addContent(content: Content): void {
        this.contents.push(content);
    }

    // function for number of items in array
    public getNumberOfItems(): number {
        return this.contents.length;
    }

    // function for readyer friendly HTML
    public getContentHtml(index: number): string {
        if (index < 0 || index >= this.contents.length) {
            return 'Invalid index';
        }
        const content = this.contents[index];
        return `
            <div>
                <h2>${content.title}</h2>
                <p>${content.description}</p>
                <p>Created by: ${content.creator}</p>
                ${content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}">` : ''}
                <p>Type: ${content.type ?? 'N/A'}</p>
            </div>
        `;
    }
}