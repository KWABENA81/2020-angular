import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log('All ' + JSON.stringify(data))), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMsg = '';
        if (err.error instanceof ErrorEvent) {
            errorMsg = `Error occured :${err.error.message}`;
        } else {
            errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMsg);
        return throwError(errorMsg);
    }
}
