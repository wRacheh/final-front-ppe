import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url="http:localhost:8024/api/demande"

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http:HttpClient) { }

  
  demanderConge(conge:any):Observable<any>{
    return this.http.post("http://localhost:8024/api/demande/add/conge",conge) ;
  }

  getAllConge():Observable<any> {
    return this.http.get("http://localhost:8024/api/demande/listeDemande/conge/all")
  }

  getCongeById(id:any):Observable<any>{
    return this.http.get(`${url}/listeDemande/conge/${id}`)
  }

  getCongeByStatus(stat:String):Observable<any>{
    return this.http.get("http://localhost:8024/api/demande/listeDemande/conge/status/"+stat)
  }
  getCongeByEmployee(employee:String):Observable<any>{
    return this.http.get("http://localhost:8024/api/demande/listeDemande/conge/employee/"+employee)
  }
  
  deletConge(id:any):Observable<any>{
    return this.http.delete("http://localhost:8024/api/demande/listeDemande/conge/delet/"+id)
  }

  deletAll():Observable<any>{
    return this.http.delete("http://localhost:8024/api/demande/listeDemande/conge/delet-all")
  }

  updateConge(id:any,conge:any):Observable<any>{
    return this.http.put("http://localhost:8024/api/demande/listeDemande/conge/"+id,conge)
  }


}
