import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<User>
  userSubject: BehaviorSubject<User>
  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user')),
    )
    this.user = this.userSubject.asObservable()
  }
  public get userValue(): User {
    return this.userSubject.value
  }

  // add user detail
  createUser(user: any) {
    return this.http.post(`${environment.baseUrl}/user/create-user`, user).pipe(
      map<any, any>(
        (response) => {
          return response
        },
        (err: any) => {
          return err
        },
      ),
    )
  }

  // get all users list
  getUserList(data: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    })
    let options = { headers: headers }

    return this.http
      .post(`${environment.baseUrl}/user/user-list`, data, options)
      .pipe(
        map<any, any>(
          (response) => {
            return response
          },
          (err: any) => {
            return err
          },
        ),
      )
  }

  //get user by id
  getById(id: string) {
    return this.http
      .get<User>(`${environment.baseUrl}/user/get-user/${id}`)
      .pipe(
        map<any, any>(
          (response) => {
            return response
          },
          (err: any) => {
            return err
          },
        ),
      )
  }

  //update user detail
  updateUserData(id: any, params: any) {
    return this.http.put(`${environment.baseUrl}/user/edit-user`, params).pipe(
      map((x) => {
        return x
      }),
    )
  }

  // delete user detail
  deleteUserData(id: string) {
    return this.http
      .delete(`${environment.baseUrl}/user//delete-user/${id}`)
      .pipe(
        map((x) => {
          return x
        }),
      )
  }
  login(email: any, password: any) {
    return this.http
      .post<User>(`${environment.baseUrl}/user/login`, { email, password })
      .pipe(
        map((user) => {
          // store user detail in localstorage
          localStorage.setItem('user', JSON.stringify(user))
          this.userSubject.next(user)
          return user
        }),
      )
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.clear()
    this.userSubject.next(null)
    this.router.navigate(['/login'])
  }
}
