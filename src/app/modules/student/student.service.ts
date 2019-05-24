import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get(this.API_URL + 'student')
  }

  getStudentDetails(studentId) {
    return this.httpClient.get(`${this.API_URL + 'student'}/${studentId}`)
  }
}
