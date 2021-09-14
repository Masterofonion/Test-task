import { Component, Input, OnInit } from '@angular/core';
import { IRate } from 'src/app/interfaces/rate-value.interface';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() aeroflotRates: IRate[] = [];

  @Input() rzdRates: IRate[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
