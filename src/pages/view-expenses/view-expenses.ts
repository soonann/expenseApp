import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Expense }    from '../../models/expense';
import { SubmitExpensePage } from '../submit-expense/submit-expense';
import { ExpenseDetailPage } from '../expense-detail/expense-detail';

@Component({
  selector: 'page-view-expenses',
  templateUrl: 'view-expenses.html'
})
export class ViewExpensesPage implements OnInit{

  expenses: Expense[];

  constructor(public navCtrl: NavController) {
  }
  goToExpenseDetail(params){

    if (!params) params = {};

  this.navCtrl.push(ExpenseDetailPage, params);

  }
  goToSubmitExpense(){

    this.navCtrl.push(SubmitExpensePage);

  }
  ngOnInit() {

    this.expenses = [
  
      new Expense("14/3/2018", 1250, "Accomodation","RWS Hotel","travel","heart-outline"),
  
      new Expense("15/3/2018", 20, "Transport", "Uber","meeting","heart-outline"),
  
      new Expense("17/3/2018", 130, "Meal", "Hai Di Lao","lunch","heart-outline")
  
    ];
  
  }
  toggleFav(item:Expense){

    if (item.favIcon == "heart-outline")

      item.favIcon = "heart";

    else

      item.favIcon = "heart-outline";

  }

 

  deleteItem(item:Expense){

    this.expenses.splice(this.expenses.indexOf(item),1);

  }
    

  getItems(ev: any) {

    // Reset items back to all of the items

   this.ngOnInit();

 

    // set val to the value of the searchbar

    let val = ev.target.value;

    console.log("search"+val);

    if (val && val.trim() != '') {

      this.expenses = this.expenses.filter(item => item.merchant.toLowerCase().includes(val.toLowerCase()) ||

      item.notes.toLowerCase().includes(val.toLowerCase()) ||

      item.category.toLowerCase().includes(val.toLowerCase())

    )

  }

  }
}
