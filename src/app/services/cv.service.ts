import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  private fakeCvs: Cv[] = [
    { id: 1, firstname: 'Aziz', name: 'Bchini', age: 21, cin: '123456789', job: 'Developer', path: 'assets/images/cv1.jpg' },
    { id: 2, firstname: 'Emna', name: 'Miraoui', age: 23, cin: '23456789', job: 'Designer', path: 'assets/images/cv2.jpg' },
    { id: 3, firstname: 'Youssef', name: 'Roussi', age: 22, cin: '34567890', job: 'RH', path: 'assets/images/cv3.jpg' },
    { id: 4, firstname: 'Someone', name: 'Older than 30', age: 33, cin: '30303030', job: 'Moudir', path: 'assets/images/avatar.jpg' },
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching CVs', error);
        this.toastr.error('Problème lors de la récupération des CVs. Affichage des CVs de secours.', 'Error');
        
        return of(this.fakeCvs);
      })
    );
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error fetching CV with ID ${id}`, error);
        // this.toastr.error('Problème lors de la récupération des détails du CV. Affichage des CVs de secours.', 'Error');

        const cv = this.fakeCvs.find(cv => cv.id === id);
        return of(cv as Cv);
      })
    );
  }

  // The DELETE endpoint has not been handled to prevent objects from being deleted from the database.
  deleteCv(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error deleting CV with ID ${id}`, error);
        
        throw error;
      })
    );
  }
}
