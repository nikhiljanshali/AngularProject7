import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Business } from '../business/Bussiness';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  constructor(private http: HttpClient) { }

  env = environment;

  //baseurl: string = "http://localhost:3000/";


  getAllBusiness() {
    return this.http.get<Business[]>(this.env.baseUrl + 'all-business');
    // return this.http.get<Business[]>(this.env.baseUrl + 'all-business')
    //   .pipe(
    //     retry(1),
    //     catchError(this.handleError)
    //   );
  }
  getBusinessById(id: string) {
    return this.http.get<Business>(this.env.baseUrl + 'business' + '/' + id);
    // return this.http.get<Business>(this.env.baseUrl + 'business' + '/' + id)
    //   .pipe(
    //     retry(1), catchError(this.handleError)
    //   );
  }
  addBusiness(bus: Business) {
    return this.http.post(this.env.baseUrl + 'new-business', bus);
    // return this.http.post(this.env.baseUrl + 'new-business', bus)
    //   .pipe(
    //     retry(1), catchError(this.handleError)
    //   )
  }
  updateBusiness(bus: Business) {
    return this.http.put(this.env.baseUrl + 'update-business/' + bus._id, bus)
    // return this.http.put(this.env.baseUrl + 'update-business/' + bus._id, bus)
    //   .pipe(
    //     retry(1), catchError(this.handleError)
    //   )
  }
  deleteBusiness(bus: Business) {
    return this.http.delete(this.env.baseUrl + 'delete-business/' + bus._id)
    // return this.http.delete(this.env.baseUrl + 'delete-business/' + bus._id)
    //   .pipe(
    //     retry(1), catchError(this.handleError)
    //   )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}