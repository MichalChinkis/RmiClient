import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../Models/user-details';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  GetUserDetails(userId:number): Observable<UserDetails> {
    let url = 'https://localhost:7056/api/User/userDetails/'+userId;
    return this.httpClient.get<UserDetails>(url)
  }

  IsUserExist(userId:number): Observable<boolean> {
    let url = 'https://localhost:7056/api/User/'+userId;
    return this.httpClient.get<boolean>(url)
  }

  GetActiveUsers(): Observable<User[]> {
    let url = 'https://localhost:7056/api/User/GetActiveUsers';
    return this.httpClient.get<User[]>(url)
  }

  GetNoActiveUsers(): Observable<User[]> {
    let url = 'https://localhost:7056/api/User/GetNoActiveUsers';
    return this.httpClient.get<User[]>(url)
  }
}
