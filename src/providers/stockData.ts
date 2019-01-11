import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Stock } from '../models/stock';

import { map } from 'rxjs/operators';

 

@Injectable()

export class StockData {

    errorMessage: string;

 

    constructor(private http: HttpClient) { }

 

    getStock() {

        return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=HCQDCQGIN3Q82FQW')

            .pipe(

                map(response => Object.keys(response['Time Series (5min)']).map(function (key, index) {

                    let row = response['Time Series (5min)'][key];

                    return new Stock(key, row['1. open'], row['2. high'], row['3. low'],row['4. close'], row['5. volume']);

                }))

            );

    }

 

}