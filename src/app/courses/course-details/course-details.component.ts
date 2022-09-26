import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  currentCourse: Course;
  @Input() originalTitle = '';
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() set course(value: Course) {
    if (!value) return;
    this.currentCourse = { ...value };
    this.originalTitle = value.title;
  }
}
