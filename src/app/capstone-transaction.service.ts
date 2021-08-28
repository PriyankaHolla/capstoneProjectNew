import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapstoneTransactionService {

  apiUrl: string = 'http://localhost:9191/api/transactions';

  constructor(private httpClient:HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  

  // Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }


}


