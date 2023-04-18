import { Component } from '@angular/core';
import { SimilarContentService } from '../similar-content.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  service;
  constructor(private s:SimilarContentService)
  {
   this.service= s.dispalyrightcorner;
  }

  title = 'Angular';
  easier =true;
  imagePath="assets/images/angular-image.webp";
  arrowPath = "./assets/images/arrow.png";
  ngPath='assets/images/ng.png'
  vpath='./assets/vedios/Angular intro.mp4'
}
