import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const USER_API = "http://localhost:8080/api/user/";

@Injectable({
  providedIn: 'root'
})
export class UserService {
// для того, чтобы делать запросы надо
  constructor(private http: HttpClient) {
  }

  //брать юзера по ID
  getUserById(id: number): Observable<any> {
    return this.http.get(USER_API + id);
  }

  //возврат текущего пользователя
  getCurrentUser(): Observable<any> {
    return this.http.get(USER_API);
  }

  updateUser(user: any): Observable<any>{
    return this.http.post(USER_API + "update",user);
  }


}
