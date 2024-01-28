import { Component, Input } from '@angular/core';
import { Institute } from 'src/app/models/institute';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss']
})
export class EduItemComponent {

  constructor() { }

  @Input() education: Institute = {
    "id": 0,
    "institute": "",
    "courses": [
      {
        "id": 0,
        "date": "",
        "title": ""      }
    ]
  }

  @Input() experience: Experience = {
    "id": 0,
      "company": "",
      "title": "",
      "date": "",
      "description": "",
      "responsibilities": []
  }

  get courses() {
    return this.education.courses;
  }

  get experiences(){
    return this.experience;
  }

  getClass() {
    let institute = this.education.institute;
    return institute.replace(/\s+/g, '-').toLowerCase();
  }
  getClassExp(){
    let company = this.experience.company;
    return company.replace(/\s+/g, '-').toLowerCase();
  }
}
