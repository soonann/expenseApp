import { HttpPage } from './../pages/http/http';
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


import { HttpClientModule } from '@angular/common/http';
import {ExpenseService} from '../providers/expense-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ExpenseFbProvider } from '../providers/expense-firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';
import { AngularFireStorageModule } from 'angularfire2/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6EGf4dw03QiPcOAg55VuDXCAHdeJrDu8",
  authDomain: "expenseapp-7f49f.firebaseapp.com",
  databaseURL: "https://expenseapp-7f49f.firebaseio.com",
  projectId: "expenseapp-7f49f",
  storageBucket: "expenseapp-7f49f.appspot.com",
  messagingSenderId: "393025545723"
};



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
    ProfilePage,
    HttpPage
  ],
  imports: [
    AngularFireStorageModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
    ProfilePage,
    HttpPage
  ],
  providers: [
    AuthService,
    Camera,
    StatusBar,
    SplashScreen,
    ExpenseService,
    ExpenseFbProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}