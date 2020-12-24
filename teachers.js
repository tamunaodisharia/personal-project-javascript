import { Validator } from "./validator.js";
export class Teachers {
    constructor() {
        this.teachers = new Map();
    }
    add(data) {
        Validator.verify(data);
        let teacherId = Symbol("Teacher Id");
        data['id'] = teacherId;
        this.teachers.set(teacherId, data);
        return teacherId;
    }
    remove(teacherId) {
        this.teachers.delete(teacherId);
    }
    update(teacherId, updatedProfile) {
        updatedProfile['id'] = teacherId;
        this.teachers.set(teacherId, updatedProfile);
    }
    read(teacherId) {
        return this.teachers.get(teacherId);
    }
}
