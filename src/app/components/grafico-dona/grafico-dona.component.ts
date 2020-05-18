import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

    // Doughnut


  @Input('ChartLabels') public doughnutChartLabels: string[] = [];
  @Input('ChartData') public doughnutChartData: number[] = [];
  @Input('ChartType') public doughnutChartType: string = '';






   public doughnutColors:any[] = [
    { backgroundColor: ["#39be27", "#bd8d1d"] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }];


  constructor() { }

  ngOnInit(): void {
  }

}
