import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-submit-expense',
  templateUrl: 'submit-expense.html'
})
export class SubmitExpensePage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
    
  }
  
  apiCall = () => {
    let val = this.http.get('/v1');
    val.subscribe(data => console.log(data));
  }
}
