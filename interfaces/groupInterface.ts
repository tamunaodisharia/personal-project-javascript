import {pupilType} from "./pupilInterface";
export interface groupType{
    id: symbol,
    room: number,
    pupils: Map<symbol, pupilType | undefined>;
}