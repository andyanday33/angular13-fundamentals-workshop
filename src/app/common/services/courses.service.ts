import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  // CRUD Operations
  all() {
    return this.http.get(this.getUrl());
  }

  find(id: number | string) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: Course) {
    return this.http.patch(this.getUrlWithId(course.id), course);
  }

  delete(id: string | number) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id: number | string) {
    return `${this.getUrl()}/${id}`;
  }
}
