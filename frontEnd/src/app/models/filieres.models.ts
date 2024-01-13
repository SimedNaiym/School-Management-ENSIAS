import { Departement } from "./departement.models";
import { ElementDeModule } from "./elementModule.models";
import { Prof } from "./prof.models";

export interface Filiere {
    filiere_id :number;
    libelle_Fil :string;
    Abrv_Fil:string;
    id_Dep : number;
    id_CF :number;
}