import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

const USER_API = `${environment.URL}/user/`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(USER_API);
  }

  public getOne(id: number): Observable<User> {
    return this.http.get<User>(USER_API + id);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(USER_API, user);
  }

  public delete(id: number): Observable<User> {
    return this.http.delete(USER_API + id);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(USER_API, user);
  }

}
