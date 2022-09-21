import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../common/models/lesson';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = [];
  lessons$: Observable<Lesson>;

  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
