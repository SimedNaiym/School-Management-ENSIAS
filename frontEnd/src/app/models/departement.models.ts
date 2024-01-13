import { Filiere } from "./filieres.models";
import { Prof } from "./prof.models";

export interface Departement {
    id_Dep : number;
    libelle_Dep : string;
    Abrv_Dep : string;
    // chefDepartement: Prof;
    // filieres: Filiere[];
}
