import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpService } from './../core/http.service';

import { Dragon } from './dragon';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DragonsService extends HttpService {
    private endpoint: string = environment.endpoints.dragons;

    constructor(private http: HttpClient) {
        super();
    }

    public get(slug: string): Observable<Dragon> {
        return this.http.get<Dragon>(this.endpoint + '/' + slug, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: Dragon) => new Dragon(response)),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public getAll(): Observable<Dragon[]> {
        const params = new HttpParams().set('size', '100');

        return this.http.get<Dragon[]>(this.endpoint, {
            headers: this.getDefaultHeaders(),
            params: params
        }).pipe(
            map((response: any) => response.items.map((data) => new Dragon(data))),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public post(dragon: any): Observable<void> {
        return this.http.post(this.endpoint, dragon, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: any) => response),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public put(slug: string, dragon: any): Observable<void> {
        return this.http.put(this.endpoint + '/' + slug, dragon, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: any) => response),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public delete(slug: string): Observable<void> {
        return this.http.delete(this.endpoint + '/' + slug, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: any) => response),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

}
