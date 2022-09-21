import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

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

  selectedCourse = emptyCourse;
  originalTitle = '';
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

  selectCourse(course: Course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
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
