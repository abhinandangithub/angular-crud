import { Component, OnInit } from '@angular/core';
import { CourseApiService } from '../service/course-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: [] = [];

  constructor(private courseApiService: CourseApiService, private router: Router) { }

  ngOnInit() {
    this.courseApiService.getAllCourses()
      .then((response) => {
        this.courses = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addCourse() {
    this.router.navigate(['/courseAdd']);
  }
}
