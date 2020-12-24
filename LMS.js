export class LMS {
    constructor() {
        this.subjects = new Map();
    }
    add(name) {
        if (this.verify(name)) {
            console.log("subject already exists");
        }
        else {
            this.subjects.set(name.id, name);
        }
    }
    remove(name) {
        if (this.verify(name)) {
            this.subjects.delete(name.id);
        }
        else {
            console.log("couldn't be removed. subject doesn't exist in the database");
        }
    }
    verify(name) {
        return this.subjects.has(name.id);
    }
    readALL() {
        return this.subjects;
    }
}
