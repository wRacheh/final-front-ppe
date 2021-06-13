import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }


  getAllPermission(): Observable<any> {
    return this.http.get("http://localhost:8024/api/demande/listeDemande/permission/all")
  }

  demanderPermission(permission: any): Observable<any> {
    return this.http.post("http://localhost:8024/api/demande/add/permission", permission)
  }

  getPermissionById(id: any): Observable<any> {
    return this.http.get("http://localhost:8024/api/demande/listeDemande/permission/" + id)
  }

  getPermissionByStatus(stat:String): Observable<any>{
    return this.http.get("http://localhost:8024/api/demande/listeDemande/permission/status/"+stat)
  }

  getPermissionByEmployer(nom:String) :Observable<any>{
    return this.http.get("http://localhost:8024/api/demande/listeDemande/permission/employee/"+nom)
  }

  repondrePermission(id:any,body:any):Observable<any>{
    return this.http.put("http://localhost:8024/api/demande/listeDemande/permission/"+id,body) 
  }

  deletOnePermission(id:any): Observable<any>{
    return this.http.delete("http://localhost:8024/api/demande/listeDemande/permission/delet/"+id)
  }

  deletAllPermission():Observable<any>{
    return this.http.delete("http://localhost:8024/api/demande/listeDemande/permission/delet-all/")
  }

}