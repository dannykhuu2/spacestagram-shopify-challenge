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

  }

  toggleLike() {
    this.liked = !this.liked;
  }

}
