import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  imageServiceSubscription!: Subscription;
  likedImages$ = this.imageService.getLikedImages();
  fetchedImages$ = this.imageService.getImages();
  imageObjects: any;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageServiceSubscription = combineLatest([this.likedImages$, this.fetchedImages$]).subscribe(([likedImages, fetchedImages]) => {
      this.imageObjects = likedImages.concat(fetchedImages);
    });
    // this.imageServiceSubscription = this.imageService.getImages().subscribe(image => {
    //   this.imageObjects = image;
    //   console.log(this.imageObjects);
    // });
  }

  ngOnDestroy() {
    this.imageServiceSubscription.unsubscribe();
  }
}
