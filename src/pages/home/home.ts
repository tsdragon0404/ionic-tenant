import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, MenuController, Nav } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { BillingPaymentPage } from '../billing-payment/billing-payment';
import { StatisticServiceOrderingPage } from '../statistic-service-ordering/statistic-service-ordering';
import { OrderServicePage } from '../order-service/order-service';
import { MorePage } from '../more/more';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{icon: string, title: string, component: any}>;
  
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public menu: MenuController) {
    this.tab1 = DashboardPage;
    this.tab2 = BillingPaymentPage;
    this.tab3 = OrderServicePage;
    this.tab4 = StatisticServiceOrderingPage;
    this.tab5 = MorePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
