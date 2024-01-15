import { Module } from "./modules.models";
import { Prof } from "./prof.models";
import { Salle } from "./salles.models";

export interface ElementDeModule {
    id_element:number;
    libelle:string;
    module:Module ;
}