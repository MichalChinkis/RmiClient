import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Misra } from '../Models/misra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisraService {

  constructor(private httpClient: HttpClient) { }

  GetMisraDetails(misraId: number): Observable<Misra> {
    let url = 'https://localhost:7056/api/Misra/GetMisraDetails/' + misraId;
    return this.httpClient.get<Misra>(url)
  }

  IsMisraFilled(misraId: number): Observable<boolean>{
    let url = 'https://localhost:7056/api/Misra/isMisraFilled/' + misraId;
    return this.httpClient.get<boolean>(url);
  }
}
