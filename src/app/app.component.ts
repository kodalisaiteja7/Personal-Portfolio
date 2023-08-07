import { Component } from '@angular/core';
import { PersonalDataService } from './services/personal-data.service';

import { Skill } from './models/skill';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';
  loading = true;

  constructor() { }

  ngOnInit() {
    this.loading;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
