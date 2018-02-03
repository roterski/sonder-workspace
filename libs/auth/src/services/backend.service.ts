import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { AuthState, getBackendAuthToken} from '../+state/auth.interfaces';
import { switchMap } from "rxjs/operators/switchMap";
import { map, catchError, concat, mergeMap } from "rxjs/operators";
import { AuthenticationFailed } from '../+state/auth.actions';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient, private store: Store<AuthState>) {}

  get(path: string): Observable<any> {
    return this.performAuthenticatedRequest(headers => {
      return this.http.get(this.url(path), headers);
    });
  }

  post(path: string, data: any): Observable<any> {
    return this.performAuthenticatedRequest(headers => {
      return this.http.post(this.url(path), data, headers);
    });
  }

  put(path: string, data: any = {}): Observable<any> {
    return this.performAuthenticatedRequest(headers => {
      return this.http.put(this.url(path), data, headers);
    });
  }

  authenticate(accessToken: string): Observable<any> {
    return this.http
      .post(
        this.url("/authenticate"),
        { access_token: accessToken },
        this.staticHeaders()
      )
      .pipe(
        map((response: any) => response.auth_token),
        catchError(error => Observable.throw(error.json()))
      );
  }

  private performAuthenticatedRequest(requestMethod): Observable<any> {
    return this.store.select(getBackendAuthToken).pipe(
      switchMap((token: string) => {
        return requestMethod(this.headers(token)).pipe(
          catchError(error => {
            if (error.status == "401") {
              this.store.dispatch(new AuthenticationFailed());
            }
            return Observable.throw(error);
          })
        );
      })
    );
  }

  private url(path) {
    return `${this.apiRoot()}${path}`;
  }

  private apiRoot(): string {
    return "http://0.0.0.0:4000/api";
  }

  private staticHeaders() {
    return {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
  }
  private headers(accessToken: string) {
    return {
      headers: {
        ...this.staticHeaders().headers,
        Authorization: accessToken
      }
    };
  }
}
