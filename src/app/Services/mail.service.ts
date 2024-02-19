import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormMail } from '../Models/form-mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  GetRecipients(formTypeId:number): Observable<FormMail[]> {
    let url = 'https://localhost:7056/api/Mail/GetRecipients/'+formTypeId;
    return this.httpClient.get<FormMail[]>(url)
  }
}
