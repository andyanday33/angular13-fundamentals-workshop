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
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService
      .all()
      .subscribe((result: Course[]) => (this.courses = result));
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number | string) {
    this.coursesService.delete(id);
  }

  saveCourse(newCourse: Course) {
    if (newCourse.id) {
      this.updateCourse(newCourse);
    } else {
      this.createCourse(newCourse);
    }
  }

  createCourse(newCourse: Course) {
    this.coursesService
      .create(newCourse)
      .subscribe((result) => this.fetchCourses());
  }

  updateCourse(updatedCourse: Course) {
    this.coursesService
      .update(updatedCourse)
      .subscribe((result) => this.fetchCourses());
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
