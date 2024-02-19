import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormMailDTO } from '../Models/form_mail_DTO.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  GetRecipients(formTypeId:number): Observable<FormMailDTO[]> {
    let url = 'https://localhost:7056/api/Mail/GetRecipients/'+formTypeId;
    return this.httpClient.get<FormMailDTO[]>(url)
  }
}
