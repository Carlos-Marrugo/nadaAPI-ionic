import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-apod-details',
  templateUrl: './apod-details.page.html',
  styleUrls: ['./apod-details.page.scss'],
})
export class ApodDetailsPage implements OnInit {
  apod: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(() => {
      const state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.apod = state['apod'];
      }
    });
  }
}