import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseFbProvider } from '../../providers/expense-firebase';
import { Expense } from '../../models/expense';

@Component({
  selector: 'page-approve-expense',
  templateUrl: 'approve-expense.html'
})
export class ApproveExpensePage implements OnInit{

  expenses: Expense[];

  constructor(public navCtrl: NavController, public expenseService: ExpenseFbProvider) {
  }
  
  ngOnInit() {

    this.expenseService.getItemsByStatus('pending').subscribe(expenses => { this.expenses = expenses; });

  } 

  approveExpense(item: Expense) {

    item.status = 'approved';

    this.expenseService.updateItem(item);

  }

 

  rejectExpense(item: Expense) {

    item.status = 'rejected';

    this.expenseService.updateItem(item);

  }
}
