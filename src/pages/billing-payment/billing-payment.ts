import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RentalPaymentPage } from '../rental-payment/rental-payment';
import { UtilitiesPaymentPage } from '../utilities-payment/utilities-payment';
import { ServicePaymentPage } from '../service-payment/service-payment';
import { SettingPaymentPage } from '../setting-payment/setting-payment';

/*
  Generated class for the BillingPayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-billing-payment',
  templateUrl: 'billing-payment.html'
})
export class BillingPaymentPage {

  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      { title: 'Rental', component: RentalPaymentPage },
      { title: 'Utilities', component: UtilitiesPaymentPage },
      { title: 'Services', component: ServicePaymentPage },
      { title: 'Payment Method', component: SettingPaymentPage }
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openItem(item) {
    this.navCtrl.push(item.component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPaymentPage');
  }

}
