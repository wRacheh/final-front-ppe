import { Employee } from "./employee";

export interface Conge {
    idCon?:any;
    dateDebut?:Date;
    dateFin?:Date;
    employee?:Employee;
    status?:"";
    motif?:String
}
