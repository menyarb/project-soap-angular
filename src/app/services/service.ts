import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/'; // L'URL de votre API

  constructor(private http: HttpClient) {}

  // Service pour la connexion
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}auth/login`, body).pipe(
      catchError((error) => {
        console.error('Erreur de connexion', error);
        throw error; // Propager l'erreur
      }),
      tap((response) => {
        // Vérifie si la réponse contient un token
        if (response.token) {
          // Enregistre le token dans le localStorage
          localStorage.setItem('token', response.accessToken);

          // Vous pouvez également enregistrer des informations supplémentaires comme l'utilisateur
          localStorage.setItem('user', JSON.stringify(response.user)); // Si 'user' existe dans la réponse
        }
      })
    );
  }

  // Exemple de méthode pour récupérer des données protégées
  getProtectedData(): Observable<any> {
    const token = localStorage.getItem('token'); 
    if (!token) {
      throw new Error('Token non trouvé');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}protected`, { headers }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des données protégées', error);
        throw error; // Propager l'erreur
      })
    );
  }
}
