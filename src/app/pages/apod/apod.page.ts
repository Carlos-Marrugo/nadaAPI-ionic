import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  standalone: false,
  selector: 'app-apod',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})
export class ApodPage implements OnInit {
  apodData: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAPOD();
  }

  getAPOD() {
    this.httpService.get('planetary/apod').subscribe((data: any) => {
      this.apodData = data;
    });
  }
}