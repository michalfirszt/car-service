import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars : Car[] = [
    {
      id: 1,
      model: 'm1',
      plate: 'p1',
      deliveryDate: 'deliveryDate1',
      deadline: 'deadline1',
      client: {
        firstName: 'firstName1',
        surname: 'surname1',
      },
      cost: 1,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'm2',
      plate: 'p2',
      deliveryDate: 'deliveryDate2',
      deadline: 'deadline2',
      client: {
        firstName: 'firstName2',
        surname: 'surname2',
      },
      cost: 2,
      isFullyDamaged: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
