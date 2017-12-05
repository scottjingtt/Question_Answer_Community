export class Sticky {
    title: string;
    content: string;
    created_date: Date;
    modified_date: Date;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}