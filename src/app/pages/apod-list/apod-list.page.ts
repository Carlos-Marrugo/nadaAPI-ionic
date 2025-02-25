import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-apod-list',
  templateUrl: './apod-list.page.html',
  styleUrls: ['./apod-list.page.scss'],
})
export class ApodListPage implements OnInit {
  apodList: any[] = []; 

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getAPODList();
  }

  getAPODList() {
    
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split('T')[0];

      this.httpService.get('planetary/apod', { date: formattedDate }).subscribe((data: any) => {
        this.apodList.push(data);
      });
    }
  }

  viewDetails(apod: any) {
    
    this.router.navigate(['/apod-details'], { state: { apod } });
  }
}