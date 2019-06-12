import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CourseApiService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Promise<any> {
    return this.http.get('http://localhost:3001/courses').toPromise();
  }
}
