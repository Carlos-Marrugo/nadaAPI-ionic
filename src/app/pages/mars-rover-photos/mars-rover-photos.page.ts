import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  standalone: false,
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.page.html',
  styleUrls: ['./mars-rover-photos.page.scss'],
})
export class MarsRoverPhotosPage implements OnInit {
  photos: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getMarsRoverPhotos();
  }

  getMarsRoverPhotos() {
    this.httpService.get('mars-photos/api/v1/rovers/curiosity/photos', { sol: 1000 }).subscribe((data: any) => {
      this.photos = data.photos;
      console.log(this.photos);
    });
  }
}