import {pupilType} from "./interfaces/pupilInterface";
import {Validator} from "./validator.js";
export class Pupils{
    pupils: Map<symbol,pupilType> = new Map(); 
    constructor(){}
    add(pupilData: pupilType):symbol{
        Validator.verify<pupilType>(pupilData);
        
        let pupilId = Symbol("Pupil Id");
        pupilData['id'] = pupilId;
        this.pupils.set(pupilId, pupilData); 
        return pupilId;
    }  
    remove(pupilId: symbol):void{
        this.pupils.delete(pupilId);
    }
    update(pupilId:symbol, newProfile:pupilType):void{
        newProfile['id']=pupilId;
        this.pupils.set(pupilId, newProfile);
    }
    read(pupilId: symbol):pupilType | undefined{
        return this.pupils.get(pupilId);
    }
}