import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../chat-room/user';

import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  private headers = new Headers();
    //type = Basic-Auth
    //username, password, masterkey ligger i body

  private usersUrl = 'https://chatbuddyrestapi2.herokuapp.com/users';  // URL to web api
  private authURL = 'https://chatbuddyrestapi2.herokuapp.com/auth';
  data: any;

  constructor(private http: Http) {
  }
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }
  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
  login(username: string, password: string)
  {
    //Masterkey skal med når man logger ind
    //username, password skal med
    //Først send info til /auth som en post request.
    //Så får vi en token + user tilbage.
    //Så kan man sætte sin token ind i en Authorization header, hvis man er et sted hvor der skal anvendes authorization.
    //Det er vigtigt at sige at det er en bearer, så Bearer xxtokenxx ved Authorization headeren.
    //Ved fremtidige requests skal ens token så bare ligge i headeren.

    console.log('Attempting login with username: ' + username + ' and ' + password);
    console.log(this.getAuthToken(username, password));
    //this.getAuthToken(username, password).subscribe(val => this.data = val);

    console.log(this.data);
    console.log('Token received');
  }
  getAuthToken(username: string, password: string): Observable<any>{
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.append('Content-Type', 'application/json');
    const masterKey = '32Zk9d6saTr5Ow1Xt0p237o0EaRrblQV';
    return this.http
      .post(this.authURL, JSON.stringify({masterKey}), {headers: headers});
      //.then(res => res.json().data as User)

      //.catch(this.handleError);
  }
  createUser(name: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  deleteUser(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  updateUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
