import {Pupils} from "./pupils.js";
import {groupType} from "./interfaces/groupInterface";
import {pupilType} from "./interfaces/pupilInterface";

export class Groups{
    pupils : Map<symbol, pupilType>;
    groups : Map<symbol,groupType>= new Map();
    constructor(pupils: Pupils){
        this.pupils = pupils.pupils;
    } 
    add(room: number):symbol{
        let groupId:symbol = Symbol("Group Id");
        let obj:groupType = {id:groupId,room:room,pupils:new Map()};
        // obj['id'] = groupId;
        // obj['room'] = room;
        // obj['pupils'] = new Map();
        this.groups.set(groupId, obj); 
        return groupId;
    }
    addPupil(groupId: symbol, pupilId: symbol):void{
        let data:groupType | undefined = this.groups.get(groupId);
        if(typeof data !== 'undefined'){
            data["pupils"].set(pupilId, this.pupils.get(pupilId));
            this.groups.set(groupId, data); 
        }
    }
    removePupil(groupId: symbol, pupilId: symbol):void{
        let data:groupType | undefined = this.groups.get(groupId);
        if(typeof data !== 'undefined'){
            data['pupils'].delete(pupilId);
            this.groups.set(groupId, data); 
        }
    }
    update(groupId: symbol, {room: n}:{room:number}):void{
        let data:groupType | undefined = this.groups.get(groupId);
        if(typeof data !== 'undefined'){
            data['room'] = n;
            this.groups.set(groupId, data); 
        }
    }
    read(groupId: symbol):groupType | undefined{

        return this.groups.get(groupId);
    }
    readAll():Map<symbol,groupType>{
        return this.groups;
    }
}