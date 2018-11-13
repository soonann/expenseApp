import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Expense }    from '../../models/expense';

@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html'
})
export class ExpenseDetailPage {
  expense: Expense;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let date = navParams.get('date');
    let amount = navParams.get('amount');
    let category = navParams.get('category');
    let merchant = navParams.get('merchant');
    this.expense = new Expense (date, amount, category, merchant);
  }
  
}
