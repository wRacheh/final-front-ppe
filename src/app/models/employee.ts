import { Departements } from "./departements";

export interface Employee {
    id?:any;
    nomEmp?:String;
    prenomEmp?:String;
    codeEmp?:String;
    email?:String;
    password?:String;
    department?:Departements
 

}
