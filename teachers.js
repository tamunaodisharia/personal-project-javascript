export class Teachers{
    teachers = new Map();
    constructor(){}
    add(data){
        let teacherId = Symbol("Teacher Id");
        data['id'] = teacherId;
        this.teachers.set(teacherId, data); 
        return teacherId;
    } 
    remove(teacherId){
        this.teachers.delete(teacherId);
    }
    update(teacherId, updatedProfile){
        updatedProfile['id'] = teacherId;
        this.teachers.set(teacherId, updatedProfile);
    }
    read(teacherId){
        return this.teachers.get(teacherId);
    }
}