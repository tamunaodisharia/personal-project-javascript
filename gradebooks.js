export class Gradebooks{
    gradebooks = new Map();
    records = [];
    constructor(groups, teachers,lms){
       this.groups = groups.groups;
       console.log("gradebooks");
       this.teachers = teachers.teachers;
        this.lms = lms.subjects;
    }
    add(level, groupId){
        let gradebookId = Symbol("Gradebook Id");
        let obj = {};
        obj['id'] = gradebookId;
        obj['level'] = level;
        obj['group'] = this.groups.get(groupId);
        this.gradebooks.set(gradebookId, obj); 
        return gradebookId;
    }
    addRecord(gradebookId, {pupilId,teacherId,subjectId,lesson,mark}){
        let obj={};
        console.log(this.teachers);
        console.log(this.teachers.get(teacherId));
        let fName = this.teachers.get(teacherId).name.first;
        let lName = this.teachers.get(teacherId).name.last;
        obj['teacher'] = fName + ' ' + lName;
        obj['subject'] = this.lms.get(subjectId).title;
        obj['lesson']=lesson;
        obj['mark']=mark;
        this.records.push({[pupilId]:obj});
    }
    clear(){
        this.gradebooks.clear();
        delete this.groups;
        delete this.lms;
        delete this.teachers;
    }
    read(gradebookId, pupilId){
        let fname = this.gradebooks.get(gradebookId).group.pupils.get(pupilId).name.first;
        let lname = this.gradebooks.get(gradebookId).group.pupils.get(pupilId).name.last;
        let arr = [];
        for(let i of this.records){
            if(pupilId === Object.getOwnPropertySymbols(i)[0]){
                arr.push(i[pupilId]);
            }
        }
        return {name: fname + ' ' + lname,
                records: arr
                };
    }
    readAll(gradebookId){
        let students = this.gradebooks.get(gradebookId).group.pupils;
        console.log(students);
        let keys =[ ...students.keys() ];
        console.log(keys);
        let arr = [];
        for(let sym of keys){
            let fname = students.get(sym).name.first;
            let lname = students.get(sym).name.last;
            let array = [];
            for(let i of this.records){
                if(sym === Object.getOwnPropertySymbols(i)[0]){
                    array.push(i[sym]);
                }
            }
            arr.push({name: fname + ' ' + lname,records: array });
        }
        return arr;
    }
}