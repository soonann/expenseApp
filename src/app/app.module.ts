import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SubmitExpensePage } from '../pages/submit-expense/submit-expense';
import { ViewExpensesPage } from '../pages/view-expenses/view-expenses';
import { ExpenseDetailPage } from '../pages/expense-detail/expense-detail';
import { ApproveExpensePage } from '../pages/approve-expense/approve-expense';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    SubmitExpensePage,
    ViewExpensesPage,
    ExpenseDetailPage,
    ApproveExpensePage,
    SignupPage,
    LoginPage,
    EditProfilePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubmitExpensePage,
    ViewExpensesPage,
    ExpenseDetailPage,
    ApproveExpensePage,
    SignupPage,
    LoginPage,
    EditProfilePage,
    ProfilePage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}