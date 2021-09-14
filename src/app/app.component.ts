import { Component } from '@angular/core';
import { AeroflotKilometerCost, RateName, RzdKilometerCost } from './enums';
import { IRate } from './interfaces/rate-value.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  distance = '';

  luggageWeight = '';

  age = '';

  rzdRates: IRate[] = [];

  aeroflotRates: IRate[] = [];

  onSubmitForm() {
    this.calculateAeroflotPrices();
    this.calculateRzdPrices();
  }
  calculateRzdPrices() {
    this.rzdRates = [];
    if (Number(this.luggageWeight) <= 50) {
      let price = RzdKilometerCost.econom * Number(this.distance);
      if (Number(this.age) <= 5) {
        price = price * 0.5;
      }
      if (Number(this.luggageWeight) > 15) {
        price = price + Number(this.luggageWeight) * 50;
      }
      this.rzdRates.push(
        {
          name: RateName.econom,
          value: price
        }
      );
    }
    if (Number(this.luggageWeight) <= 60) {
      let price = RzdKilometerCost.advanced * Number(this.distance);
      if (Number(this.age) <= 8) {
        price = price * 0.7;
      }
      if (Number(this.luggageWeight) > 20) {
        price = price + Number(this.luggageWeight) * 50;
      }
      this.rzdRates.push(
        {
          name: RateName.advanced,
          value: price
        }
      );
    }
    if (Number(this.luggageWeight) <= 60) {
      this.rzdRates.push(
        {
          name: RateName.lux,
          value: RzdKilometerCost.lux * Number(this.distance)
        }
      );
    }



  }
  calculateAeroflotPrices() {
    this.aeroflotRates = [];
    if (Number(this.luggageWeight) <= 20) {
      let price: number;
      if (Number(this.luggageWeight) > 5) {
        price = AeroflotKilometerCost.econom * Number(this.distance) + 4000;
      } else {
        price = AeroflotKilometerCost.econom * Number(this.distance);
      }
      this.aeroflotRates.push(
        {
          name: RateName.econom,
          value: price
        }
      );
    }
    if (Number(this.luggageWeight) <= 50) {
      let price: number = AeroflotKilometerCost.advanced * Number(this.distance);
      if (Number(this.age) <= 7) {
        price = price * 0.7;
      }
      if (Number(this.luggageWeight) > 20) {
        price += 5000;
      }
      this.aeroflotRates.push(
        {
          name: RateName.advanced,
          value: price
        }
      );
    }
    if (Number(this.luggageWeight) <= 50) {
      let price: number = AeroflotKilometerCost.lux * Number(this.distance);
      if (Number(this.age) <= 16) {
        price = price * 0.7;
      }
      this.aeroflotRates.push(
        {
          name: RateName.lux,
          value: price
        }
      );
    }
  }
}
