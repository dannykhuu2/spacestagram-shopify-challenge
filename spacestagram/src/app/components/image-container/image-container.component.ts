import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {

  @Input() imageObject: any;
  liked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.imageObject.liked) {
      this.liked = true;
    }
  }

  toggleLike() {
    if (this.liked === false) {
      this.imageObject["liked"] = 'true';
      localStorage.setItem('nasaImage!@#' + this.imageObject.title, JSON.stringify(this.imageObject));
    } else if (this.liked === true) {
      try {
        localStorage.removeItem('nasaImage!@#' + this.imageObject.title);
      } catch(e) {
        console.log(e);
      }
      
    }
    this.liked = !this.liked;
  }
}
