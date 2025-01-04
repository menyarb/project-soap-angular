import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private gatewayUrl = '/api/student'; 


  constructor(private http: HttpClient) { }

  // Exemple d'appel pour obtenir les étudiants
  getStudents(): Observable<any> {
    return this.http.get(`${this.gatewayUrl}/all`);
  }


  
  createStudent(student: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.gatewayUrl}/create`, student, { headers });
  }
    // Supprimer un étudiant par ID
    deleteStudent(id: number): Observable<void> {
        return this.http.delete<void>(`${this.gatewayUrl}/${id}`);
      }
  

}
