import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tafkid } from '../Models/tafkid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TafkidService {

  constructor(private httpClient: HttpClient) { }
  getTafkidim(): Observable<Tafkid[]> {
    let url = 'https://localhost:7056/getTafkidim';
    return this.httpClient.get<Tafkid[]>(url)
  }
}
