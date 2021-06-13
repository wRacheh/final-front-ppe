import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8023/departement';
const baseUrl1 = 'http://localhost:8023/employee';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get("http://localhost:8023/departement/List-departement")
  }

  getByid(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`)
  }

  getDepartementByname(name: any): Observable<any> {
    return this.http.get(`http://localhost:8023/departement/name/${name}`)
  }

  addDepartement(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data)
  }
  updateDepartement(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data)
  }

  deleteDepartement(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`)
  }
  
  getAllEmployee():Observable<any>{
    return this.http.get(`${baseUrl1}/all`)
  }

  getEmployeeByid(id:any):Observable<any>{
    return this.http.get(`${baseUrl1}/${id}`)
  }
  
  addEmployee(data:any):Observable<any>{
    return this.http.post(`${baseUrl1}/add`,data)
  }

  updateEmployee(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl1}/update/${id}`,data)
  }

  deletEmployeeById(id:any):Observable<any>{
    return this.http.delete(`${baseUrl1}/delete/${id}`)
  }

  getEmployeByNomEmp(nomEmp:any):Observable<any>{
    return this.http.get(`${baseUrl1}/name/${nomEmp}`)
  }
  getEmployeeByNomDep(nomdep:any):Observable<any>{
    return this.http.get(`${baseUrl1}/departement/${nomdep}`)
  }

  getEmployeeByCode(code:any):Observable<any> {
    return this.http.get("http://localhost:8023/employee/code/"+code)
  }

  getAllPointage():Observable<any>{
    return this.http.get("http://localhost:8023/pointage/liste")
  }

  pointer(body:any,code:any):Observable<any>{

   return this.http.post("http://localhost:8023/employee/pointer/"+code,body)
  }

  getMespointage(employee:any):Observable<any>{
    return this.http.get("http://localhost:8023/pointage/employee/"+employee);
  }
  
}
