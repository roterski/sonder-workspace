import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, catchError, switchMap } from 'rxjs/operators';
// import { FacebookService, InitParams, AuthResponse } from 'ngx-facebook';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  constructor(/*private http: HttpClient, private facebookService: FacebookService*/) {
    // const params: InitParams = {
    //   version: 'v2.10',
    //   appId: '897988177030305'
    // };
    // facebookService.init(params);
  }

  facebookLogIn(): Observable<any> {
    debugger
    return of("123");
    // return fromPromise(this.facebookService.getLoginStatus()).pipe(
    //   switchMap(data => data['status'] === "connected" ? of(data) : fromPromise(this.facebookService.login())),
    //   map(data => data['authResponse'].accessToken), catchError(
    //       (error: any) => Observable.throw(error.json())
    //     )
    // );
  }
}
