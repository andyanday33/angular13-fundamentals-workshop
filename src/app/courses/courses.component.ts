import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // RENDER COURSES IN A LIST
  // SELECT A COURSE
  // RENDER SELECTED COURSE

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JS: The Hard Parts',
      description: 'Learn the hard parts of Javacript.',
      percentComplete: 33,
      favorite: true,
    },
  ];
  selectedCourse = null;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
