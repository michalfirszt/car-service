import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent implements OnInit {

  @Input() totalCost : number;

  constructor() { }

  ngOnInit() {
  }

}
