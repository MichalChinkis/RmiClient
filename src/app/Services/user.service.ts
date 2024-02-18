import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailsDTO } from '../Models/userDetailsDTO.model';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { UserDTO } from '../Models/userDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  GetUserDetails(userId:number): Observable<UserDetailsDTO> {
    let url = 'https://localhost:7056/api/User/userDetails/'+userId;
    return this.httpClient.get<UserDetailsDTO>(url)
  }

  IsUserExist(userId:number): Observable<boolean> {
    let url = 'https://localhost:7056/api/User/'+userId;
    return this.httpClient.get<boolean>(url)
  }

  GetActiveUsers(): Observable<UserDTO[]> {
    let url = 'https://localhost:7056/api/User/GetActiveUsers';
    return this.httpClient.get<UserDTO[]>(url)
  }

  GetNoActiveUsers(): Observable<UserDTO[]> {
    let url = 'https://localhost:7056/api/User/GetNoActiveUsers';
    return this.httpClient.get<UserDTO[]>(url)
  }
}
