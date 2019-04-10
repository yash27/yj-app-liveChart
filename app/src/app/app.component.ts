import { Component } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stockChart: StockChart;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get('./assets/ticks.json').subscribe(resp => {
      let response = resp.json();
      if(response.code == 0){
        this.setChart(response.data);
      }
    });
  }

  setChart(data) {
    this.stockChart = new StockChart(<any>{
      chart: {
        height: '45%',
        zoomType: 'x'
      },

      navigator: {
        enabled: false
      },
      tooltip: {
        split: false,
        shared: true,
        borderWidth: 1,
        shape: 'rect',
        positioner: function () {
          return { x: 0, y: 0 };
        },
      },
      xAxis: {
        crosshair: {
          snap: false,
          label: {
            enabled: true
          }
        }
      },
      yAxis: {
        opposite: true,
        crosshair: {
          snap: false,
          label: {
            enabled: true,
            format: '{value:.2f}'
          }
        }
      },

      rangeSelector: {
        enabled: false
      },

      credits: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        candlestick: {
          color: '#ef5350',
          lineColor: '#ef5350',
          upColor: '#26a69a',
          upLineColor: '#26a69a'
        },
        series: {
          dataGrouping: {
            enabled: false
          },
          marker: {
            enabled: false
          },

        },
      },

      colors: [
        "#2f7ed8",
        "#0d233a",
        "#8bbc21",
        "#910000",
        "#1aadce",
        "#492970",
        "#f28f43",
        "#77a1e5",
        "#c42525",
        "#a6c96a"
      ],

      title: {
        text: 'AAPL Stock Price'
      },

      series: [{
        name: 'AAPL',
        type: 'candlestick',
        data: data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    })
  }

}
