import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SettingPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting-payment',
  templateUrl: 'setting-payment.html'
})
export class SettingPaymentPage {

  items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        name: "Deposit"
      },
      {
        name: "Company Expense"
      },
      {
        name: "Credit Card"
      },
      {
        name: "Paypal"
      }
    ];
  }

  openItem(item){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPaymentPage');
  }

}
