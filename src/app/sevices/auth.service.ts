import { Injectable, inject, runInInjectionContext } from '@angular/core';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  http = inject(HttpClient);

  public loginWithUsernameAndPassword(username:string, password:string){
    const url = environment.baseUrl + '/login/';
    const body = {
      username: username,
      password: password,
    }

    return lastValueFrom(this.http.post(url, body));
  }


  
}
