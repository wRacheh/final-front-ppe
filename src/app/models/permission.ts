import { Employee } from "./employee";

export interface Permission {
    idPer?:any;
    heureDebut?:Date;
    heureFin?:Date;
    motif?:String;
    status?:String;
    employee?:Employee
}
