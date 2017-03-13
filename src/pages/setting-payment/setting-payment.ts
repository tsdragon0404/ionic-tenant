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
  selectedType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        type: "DE",
        name: "Deposit"
      },
      {
        type: "CE",
        name: "Company Expense"
      },
      {
        type: "CC",
        name: "Credit Card"
      },
      {
        type: "PP",
        name: "Paypal"
      }
    ];

    this.selectedType = 'CC';
  }

  onChange(item){
    console.log(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPaymentPage');
  }

}
