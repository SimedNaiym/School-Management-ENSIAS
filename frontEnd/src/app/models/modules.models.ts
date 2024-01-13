import { Classe } from "./classes.models";
import { Filiere } from "./filieres.models";
import { Prof } from "./prof.models";
import { Semestre } from "./semestre.models";

export interface Module {
    id_module:number;
    libelle:string;
    filiere:Filiere;
    responsable:Prof;

}