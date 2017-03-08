import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BillingHomePage } from '../billing-home/billing-home';
import { BillingPaymentPage } from '../billing-payment/billing-payment';
import { BillingServicesPage } from '../billing-services/billing-services';
import { BillingHistoryPage } from '../billing-history/billing-history';

/*
  Generated class for the Billing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html'
})
export class BillingPage {

  tabs: Array<{title: string, icon: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      { title: 'Home', icon: 'home', component: BillingHomePage},
      { title: 'Payment', icon: 'cash', component: BillingPaymentPage},
      { title: 'Order Services', icon: 'cart', component: BillingServicesPage},
      { title: 'History', icon: 'archive', component: BillingHistoryPage}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
  }

}
