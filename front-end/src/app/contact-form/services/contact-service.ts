import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment  } from '../../../environments/environment';
import {ContactFormData} from '../models/contact-model';

@Injectable({ 
  providedIn: 'root' 
})
export class ContactService {
  constructor(private http: HttpClient) {}


  createContact(formData: ContactFormData): Observable<void> {
    return this.http.post<void>(environment.apiUrl, formData, 
                               {headers: { 'Content-Type': 'application/json' }}).pipe(
      catchError((error : HttpErrorResponse) => {
        console.error('Error detallado:', error); // Para depuración
        //Procesamiento del error
        const customError = this.handleHttpError(error);
        // Manejo de errores
        return throwError(() => new Error("Error procesado"));
      }),
      finalize(() => {
        console.log('Operación completada (éxito o fallo)');
      }) // Siempre se ejecuta
    );
  }

  private handleHttpError(error: HttpErrorResponse): Error {
    let errorMessage = 'Error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = this.getServerErrorMessage(error);
    }
    console.log(errorMessage);
    return new Error(errorMessage);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 0:
        return 'No hay conexión con el servidor';
      case 400:
        return 'Datos inválidos: ' + (error.error?.message || JSON.stringify(error.error));
      case 404:
        return 'Recurso no encontrado';
      case 500:
        return 'Error interno del servidor';
      default:
        return `Error ${error.status}: ${error.message}`;
    }
  }
}