export class Gradebooks {
    constructor(groups, teachers, lms) {
        this.gradebooks = new Map();
        //records: {[x:string]:recordType}[] = [];
        this.records = new Map();
        this.lms = new Map();
        this.groups = groups.groups;
        this.teachers = teachers.teachers;
        this.lms = lms.subjects;
    }
    add(level, groupId) {
        let gradebookId = Symbol("Gradebook Id");
        if (typeof this.groups !== 'undefined') {
            let obj = { id: gradebookId, level: level, group: this.groups.get(groupId) };
            this.gradebooks.set(gradebookId, obj);
        }
        return gradebookId;
        // obj['id'] = gradebookId;
        // obj['level'] = level;
        // obj['group'] = this.groups.get(groupId);
    }
    addRecord(gradebookId, { pupilId, teacherId, subjectId, lesson, mark }) {
        let fName, lName;
        let teach;
        if (typeof this.teachers !== "undefined") {
            teach = this.teachers.get(teacherId);
            if (typeof teach !== "undefined" && typeof this.lms !== "undefined") {
                fName = teach.name.first;
                lName = teach.name.last;
                let obj = { teacher: fName + ' ' + lName, subject: this.lms.get(subjectId).title, lesson: lesson, mark: mark };
                // obj['teacher'] = fName + ' ' + lName;
                // obj['subject'] = this.lms.get(subjectId).title;
                // obj['lesson']=lesson;
                // obj['mark']=mark;
                if (typeof this.records.get(pupilId) === "undefined") {
                    let newarr = [];
                    newarr.push(obj);
                    this.records.set(pupilId, newarr);
                }
                else {
                    let oldarr = this.records.get(pupilId).push(obj);
                    this.records.set(pupilId, oldarr);
                }
                //this.records.set(pupilId,)
                //this.records.push({[pupilId]:obj});
            }
        }
    }
    clear() {
        this.gradebooks.clear();
        delete this.groups;
        delete this.lms;
        delete this.teachers;
    }
    read(gradebookId, pupilId) {
        let fname = this.gradebooks.get(gradebookId).group.pupils.get(pupilId).name.first;
        let lname = this.gradebooks.get(gradebookId).group.pupils.get(pupilId).name.last;
        //let arr = [];
        let student = this.records.get(pupilId);
        // for(let i of this.records){
        //     if(pupilId === Object.getOwnPropertySymbols(i)[0]){
        //         const sym:symbol = pupilId;
        //         console.log("Array:");
        //         console.log(Reflect.ownKeys(i)[0]);
        //         arr.push(i);
        //     }
        // }
        // console.log({name: fname + ' ' + lname,
        // records: arr
        // });
        return { name: fname + ' ' + lname,
            records: student
        };
    }
    readAll(gradebookId) {
        let students = this.gradebooks.get(gradebookId).group.pupils;
        let keys = [...students.keys()];
        let arr = [];
        for (let sym of keys) {
            let fname = students.get(sym).name.first;
            let lname = students.get(sym).name.last;
            let student = this.records.get(sym);
            // let array = [];
            // for(let i of this.records){
            //     if(sym === Object.getOwnPropertySymbols(i)[0]){
            //         array.push(i[sym]);
            //     }
            // }
            arr.push({ name: fname + ' ' + lname, records: student });
        }
        return arr;
    }
}
