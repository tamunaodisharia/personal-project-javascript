import {subjectType} from "./interfaces/subjectInterface";
import {Subject} from "./subject";
export class LMS{
    subjects = new Map();
    constructor(){}
    add(name: subjectType):void{
        if(this.verify(name)){
            console.log("subject already exists");
        }else{
            this.subjects.set(name.id, name); 
        } 
    }
    remove(name: subjectType):void{
        if(this.verify(name)){
            this.subjects.delete(name.id);
        }else{
            console.log("couldn't be removed. subject doesn't exist in the database");
        }
    }
    verify(name: subjectType):boolean{
        return this.subjects.has(name.id);
    }
    readALL():Map<symbol,Subject>{     
        return this.subjects;
    }
}