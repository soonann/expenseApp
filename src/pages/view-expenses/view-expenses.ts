import { ExpenseService } from './../../providers/expense-service';
import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Expense }    from '../../models/expense';
import { SubmitExpensePage } from '../submit-expense/submit-expense';
import { ExpenseDetailPage } from '../expense-detail/expense-detail';
import { ExpenseFbProvider } from '../../providers/expense-firebase';



@Component({
  selector: 'page-view-expenses',
  templateUrl: 'view-expenses.html'
})
export class ViewExpensesPage implements OnInit{

  expenses: Expense[];

  constructor(public navCtrl: NavController, private expenseService: ExpenseFbProvider) 
  {
    
  }
  ngOnInit() {

    this.expenseService.getItems().subscribe( exp => {

      this.expenses = exp;
      for (let item of this.expenses){
        if(!item.favIcon || item.favIcon.trim() != ''){
          item.favIcon = 'heart-outline';
        }
      }
    } );

  


    /*[
  
      new Expense("14/3/2018", 1250, "Accomodation","RWS Hotel","travel","heart-outline"),
  
      new Expense("15/3/2018", 20, "Transport", "Uber","meeting","heart-outline"),
  
      new Expense("17/3/2018", 130, "Meal", "Hai Di Lao","lunch","heart-outline")
  
    ];
    */
  
  }

  goToExpenseDetail(params){

    if (!params) params = {};

  this.navCtrl.push(ExpenseDetailPage, params);

  }
  goToSubmitExpense(){

    this.navCtrl.push(SubmitExpensePage);

  }

  toggleFav(item:Expense){

    if (item.favIcon == "heart-outline")

      item.favIcon = "heart";

    else

      item.favIcon = "heart-outline";

  }

 

  deleteItem(item:Expense){
    this.expenseService.removeItem(item);
    // this.expenses.splice(this.expenses.indexOf(item),1);

  }
    

  getItems(ev: any) {

    // Reset items back to all of the items

  //  this.ngOnInit();

   let val = ev.target.value;

   this.expenses = this.expenseService.searchItems(val)
    /*
    // set val to the value of the searchbar

    let val = ev.target.value;

    console.log("search"+val);

    if (val && val.trim() != '') {

      this.expenses = this.expenses.filter(item => item.merchant.toLowerCase().includes(val.toLowerCase()) ||

      item.notes.toLowerCase().includes(val.toLowerCase()) ||

      item.category.toLowerCase().includes(val.toLowerCase()) || 

      item.notes && 
      item.notes.toLowerCase().includes(val.toLowerCase())
      )

     


    

  }
 */
  }
}
