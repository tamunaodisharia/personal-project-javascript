export class Subject {
    constructor({title,lessons, description}){
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        this.id = Symbol("Subject Id");
    }
}