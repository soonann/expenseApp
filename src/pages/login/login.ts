import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../providers/auth-service';
import { ViewExpensesPage } from '../view-expenses/view-expenses';
import { User } from '../../models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: User;

  loginError: string;

  constructor(public navCtrl: NavController,private authService: AuthService) {
    this.user = new User ('', '', '');
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }

  
  login() {

    this.authService.login(this.user.email, this.user.password)

    .then(

      () => this.navCtrl.setRoot(ViewExpensesPage),

       error => this.loginError = error.message

    );

  } 
}
