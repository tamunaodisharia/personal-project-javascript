export class Groups{
    groups = new Map();
    constructor(pupils){
        this.pupils = pupils.pupils;
    }
    add(room){
        let groupId = Symbol("Group Id");
        let obj = {};
        obj['id'] = groupId;
        obj['room'] = room;
        obj['pupils'] = new Map();
        this.groups.set(groupId, obj); 
        return groupId;
    }
    addPupil(groupId, pupilId){
        let data = this.groups.get(groupId);
        data['pupils'].set(pupilId, this.pupils.get(pupilId));
        this.groups.set(groupId, data); 
    }
    removePupil(groupId, pupilId){
        let data = this.groups.get(groupId);
        data['pupils'].delete(pupilId);
        this.groups.set(groupId, data); 
    }
    update(groupId, {room: n}){
        let data = this.groups.get(groupId);
        data['room'] = n;
        this.groups.set(groupId, data); 
    }
    read(groupId){
        return this.groups.get(groupId);
    }
    readAll(){
        return this.groups;
    }
}