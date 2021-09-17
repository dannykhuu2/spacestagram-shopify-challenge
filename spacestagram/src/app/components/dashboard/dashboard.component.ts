import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  imageServiceSubscription!: Subscription;
  imageObjects: any;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageServiceSubscription = this.imageServiceSubscription = this.imageService.getImages().subscribe(image => {
      this.imageObjects = image;
      console.log(this.imageObjects);
    });
  }

  ngOnDestroy() {
    this.imageServiceSubscription.unsubscribe();
  }
}
