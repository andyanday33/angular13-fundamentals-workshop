import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // RENDER COURSES IN A LIST
  // SELECT A COURSE
  // RENDER SELECTED COURSE

  courses: Course[] = [
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
  selectedCourse = emptyCourse;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: Course) {
    this.selectedCourse = { ...course };
  }

  deleteCourse(id: number | string) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  saveCourse(newCourse: Course) {
    this.courses = this.courses.map((course) =>
      course.id === newCourse.id ? newCourse : course
    );
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
