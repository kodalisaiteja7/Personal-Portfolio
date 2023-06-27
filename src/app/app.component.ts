import { Component } from '@angular/core';
import { Skill } from './models/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor() {}




  //DATA -----------------------------------------------------------
  hardSkills: Skill[] = [
    {
      "name": "Angular",
      "icon": "../../../assets/icons/hard-skills/angular.svg"
    },
    {
      "name": "Django",
      "icon": "../../../assets/icons/hard-skills/django.svg"
    },
    {
      "name": "MySQL",
      "icon": "../../../assets/icons/hard-skills/mysql.svg"
    },
    {
      "name": "Python",
      "icon": "../../../assets/icons/hard-skills/git.svg"
    },
    {
      "name": "TypeScript",
      "icon": "../../../assets/icons/hard-skills/typescript.svg"
    },
    {
      "name": "JavaScript",
      "icon": "../../../assets/icons/hard-skills/javascript.svg"
    },
    {
      "name": "Git",
      "icon": "../../../assets/icons/hard-skills/python.svg"
    },
    {
      "name": "SASS",
      "icon": "../../../assets/icons/hard-skills/sass.svg"
    },
    {
      "name": "HTML & CSS",
      "icon": "../../../assets/icons/hard-skills/html_css.svg"
    }
  ]

  softSkills: Skill[] = [
    {
      "name": "Trabajo en equipo",
      "icon": ""
    },
    {
      "name": "Autodidacta",
      "icon": ""
    },
    {
      "name": "Facilidad de aprendizaje",
      "icon": ""
    },
    {
      "name": "Creatividad",
      "icon": ""
    },
    {
      "name": "Adaptabilidad",
      "icon": ""
    },
    {
      "name": "Capacidad analítica",
      "icon": ""
    }
  ]
}
