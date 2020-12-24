export class Groups {
    constructor(pupils) {
        this.groups = new Map();
        this.pupils = pupils.pupils;
    }
    add(room) {
        let groupId = Symbol("Group Id");
        let obj = { id: groupId, room: room, pupils: new Map() };
        // obj['id'] = groupId;
        // obj['room'] = room;
        // obj['pupils'] = new Map();
        this.groups.set(groupId, obj);
        return groupId;
    }
    addPupil(groupId, pupilId) {
        let data = this.groups.get(groupId);
        if (typeof data !== 'undefined') {
            data["pupils"].set(pupilId, this.pupils.get(pupilId));
            this.groups.set(groupId, data);
        }
    }
    removePupil(groupId, pupilId) {
        let data = this.groups.get(groupId);
        if (typeof data !== 'undefined') {
            data['pupils'].delete(pupilId);
            this.groups.set(groupId, data);
        }
    }
    update(groupId, { room: n }) {
        let data = this.groups.get(groupId);
        if (typeof data !== 'undefined') {
            data['room'] = n;
            this.groups.set(groupId, data);
        }
    }
    read(groupId) {
        return this.groups.get(groupId);
    }
    readAll() {
        return this.groups;
    }
}
