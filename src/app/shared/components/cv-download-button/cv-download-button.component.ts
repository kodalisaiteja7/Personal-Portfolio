import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-download-button',
  templateUrl: './cv-download-button.component.html',
  styleUrls: ['./cv-download-button.component.scss']
})
export class CvDownloadButtonComponent {
  urlCV = '../../../../assets/cv.pdf';
  
}
