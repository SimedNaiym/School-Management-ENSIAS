import { Departement } from "./departement.models";
import { ElementDeModule } from "./elementModule.models";
import { Prof } from "./prof.models";

export interface Filiere {
    id_filiere:  number;
    libelle:     string;
    chef_filiere:  Prof;
    departement: Departement;
    elements: ElementDeModule[];
}
