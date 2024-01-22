import { IMainNav } from "./main-nav.interface";
import { IItems } from './items.interface';

export interface ISideList {
    sectionTitle: string;
    accordionItems: IMainNav[],
    item?:IItems[]
}