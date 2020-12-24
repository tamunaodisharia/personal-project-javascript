import {groupType} from "./groupInterface";
export interface gradebookType{
    id: symbol,
    level: number,
    group: groupType | undefined;
}