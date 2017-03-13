import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HousingServicePage } from '../housing-service/housing-service';
import { DashboardPage } from '../dashboard/dashboard';
import { BillingPaymentPage } from '../billing-payment/billing-payment';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { OrderServicePage } from '../order-service/order-service';

/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  pages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { icon: 'speedometer', title: 'Dashboard', component: DashboardPage },
      { icon: 'cash', title: 'Billing Management', component: BillingPaymentPage },
      { icon: 'home', title: 'Services', component: HousingServicePage },
      { icon: 'basket', title: 'Order Services', component: OrderServicePage },
      { icon: 'cog', title: 'Settings', component: SettingsPage },
      { icon: 'information-circle', title: 'About us', component: AboutPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
