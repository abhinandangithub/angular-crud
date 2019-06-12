import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor() { }
  @Input()
  courses = [];

  ngOnInit() {
    console.log(this.courses);
  }

}
