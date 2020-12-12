export class LMS{
    subjects = new Map();
    constructor(){}
    add(name){
        this.subjects.set(name.id, name); 
    }
    remove(name){
        this.subjects.delete(name.id);
    }
    verify(name){
        return this.subjects.has(name.id);
    }
    readALL(){
        return this.subjects;
    }
}

