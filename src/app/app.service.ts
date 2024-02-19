import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

    getUsers() {
       return this.http.get(`${environment.API_URL}/users`);
    }

    searchUsers(searchString:string) {
        return this.http.get(`${environment.API_URL}/search/users?q=${searchString}`)
    }
}
