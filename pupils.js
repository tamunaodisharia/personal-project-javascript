import { Validator } from "./validator.js";
export class Pupils {
    constructor() {
        this.pupils = new Map();
    }
    add(pupilData) {
        Validator.verify(pupilData);
        let pupilId = Symbol("Pupil Id");
        pupilData['id'] = pupilId;
        this.pupils.set(pupilId, pupilData);
        return pupilId;
    }
    remove(pupilId) {
        this.pupils.delete(pupilId);
    }
    update(pupilId, newProfile) {
        newProfile['id'] = pupilId;
        this.pupils.set(pupilId, newProfile);
    }
    read(pupilId) {
        return this.pupils.get(pupilId);
    }
}
