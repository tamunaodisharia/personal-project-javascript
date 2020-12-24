//import {Validator} from "./validator.js";
/// <reference path="./validator.ts" />
import {teacherType} from "./interfaces/teacherInterface";
import {Validator} from "./validator.js";
export class Teachers{ 
    teachers:Map<symbol,teacherType> = new Map();
    constructor(){}
    add(data: teacherType):symbol{
        Validator.verify<teacherType>(data);
        let teacherId: symbol = Symbol("Teacher Id");
        data['id'] = teacherId;
        this.teachers.set(teacherId, data); 
        return teacherId;
    } 
    remove(teacherId: symbol):void{
        this.teachers.delete(teacherId);
    }
    update(teacherId:symbol, updatedProfile: teacherType):void{
        updatedProfile['id'] = teacherId;
        this.teachers.set(teacherId, updatedProfile);
    }
    read(teacherId:symbol):teacherType | undefined{
        return this.teachers.get(teacherId);
    }
}