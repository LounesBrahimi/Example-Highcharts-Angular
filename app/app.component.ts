import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
   },
   title: {
      text: 'Historic World Population by Region'
   },
   subtitle : {
      text: 'Source: Wikipedia.org'  
   },
   legend : {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 250,
      y: 100,
      floating: true,
      borderWidth: 1, shadow: true
      },
      xAxis:{
         categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
         text: null
      } 
   },
   yAxis : {
      min: 0, title: {
         text: 'Population (millions)', align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   },
   tooltip : {
      valueSuffix: ' millions'
   },
   plotOptions : {
      bar: {
         dataLabels: {
            enabled: true
         }
      }
   },
   credits:{
      enabled: false
   },
    series: [
      {
        name: 'Year 1800',
        type: 'bar',
        data: [107, 31, 635, 203, 2]
      },
      {
        name: 'Year 1900',
        type: 'bar',
        data: [133, 156, 947, 408, 6]
     }, 
     {
        name: 'Year 2008',
        type: 'bar',
        data: [973, 914, 4054, 732, 34]      
     }
    ]
  };
}
