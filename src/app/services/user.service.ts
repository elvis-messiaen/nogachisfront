import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  public delete(id : number): Observable<User> {
    return this.http.delete(`${this.userUrl}/${id}`);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl, user);
  }
}
