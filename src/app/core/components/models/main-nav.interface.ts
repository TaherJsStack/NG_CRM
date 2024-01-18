import { IItems } from "./items.interface";

export interface IMainNav {
    title: string;
    icon: string;
    count?: number;
    items: IItems[]
}