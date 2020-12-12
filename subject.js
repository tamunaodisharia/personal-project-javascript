export class Subject {
    constructor({title,lessons, description}){
        if(typeof title !== 'string' || typeof title === 'undefined'){
            throw new Error("Error: subject title is required and it should be a string");
        }
        if(typeof lessons !== 'number' || typeof title === 'undefined'){
            throw new Error("Error: number of subject lessons is required and its type should be a number");
        }else{
            if(lessons > 366 || lessons < 0){
                throw new Error("Error: number of lessons is not a valid number");
            }
        }
        if(typeof description !== 'string' && typeof description !== 'undefined'){
            throw new Error("Error: subject title should be a string");
        }
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        this.id = Symbol("Subject Id");
    }
}