import { Component } from '@angular/core';
import { PersonalDataService } from './services/personal-data.service';
import { LoaderService } from './services/loader.service';

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

    // {
    //   "id": 7,
    //   "img": "./assets/imgs/accesible-portfolio.png",
    //   "title": "Portfolio Accesible",
    //   "description": "Un portfolio sencillo priorizando la accesibilidad web de acuerdo a los lineamientos de la WCAG, incluyendo accesibilidad para usuarios con teclado por navegación por tab y lectores de pantalla.",
    //   "skills": ["HTML", "CSS", "JavaScript"],
    //   "github": "https://github.com/PaylemanC/proyEj-portfolio-accesible--Platzi",
    //   "deploy": "https://master--portfolio-accesible.netlify.app/index.html",
    //   "status": "COMPLETED",
    //   "category": "Frontend"
    // },
    // {
    //   "id": 8,
    //   "img": "./assets/imgs/batatabit.png",
    //   "title": "Batatabit",
    //   "description": "Landing page responsive de la empresa ficticia de bitcoins Batatabit con enfoque en maquetación mobile first.",
    //   "skills": ["HTML", "CSS"],
    //   "github": "https://github.com/PaylemanC/Batabit--Platzi",
    //   "deploy": "https://batabit-crypto.netlify.app/",
    //   "status": "COMPLETED",
    //   "category": "Frontend"
    // }
}
