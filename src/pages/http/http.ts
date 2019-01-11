import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StockData } from '../../providers/stockData';

import { Stock } from '../../models/stock';
/**
 * Generated class for the HttpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {
  errorMessage: string;

  items: any[];

 

  constructor(public navCtrl: NavController, private stockData: StockData) {

 

    this.stockData.getStock()

      .subscribe(

        data => this.items = data,

        error => this.errorMessage = JSON.stringify(error)

      );

 

  }
}
