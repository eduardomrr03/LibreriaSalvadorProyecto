import { Component } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-chart',
  template: '<canvas id="myChart"></canvas>',
  styleUrls: ['./admin-panel.component.css']
  /*
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
  */
})
export class AdminPanelComponent {
  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 10],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
