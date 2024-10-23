import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';


interface datos {
  id: number;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private apiUrl = 'http://127.0.0.1/:5500';
  constructor(private http: HttpClient) { }

  getDatos(): Observable<datos[]>{
    return this.http.get<datos[]>(this.apiUrl).pipe(
      catchError(this.ErrorRef)
    );
  }

  private ErrorRef(error: HttpErrorResponse){
    console.error("Error", error);
    return throwError("Algo salió mal, valiste")
  }
}
