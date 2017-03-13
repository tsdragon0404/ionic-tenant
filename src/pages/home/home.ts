import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, MenuController, Nav } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { AccountPage } from '../account/account';
import { HousingServicePage } from '../housing-service/housing-service';
import { DashboardPage } from '../dashboard/dashboard';
import { BillingPaymentPage } from '../billing-payment/billing-payment';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
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
    this.pages = [
      { icon: 'speedometer', title: 'Dashboard', component: DashboardPage },
      { icon: 'cash', title: 'Billing Management', component: BillingPaymentPage },
      { icon: 'home', title: 'Services', component: HousingServicePage },
      { icon: 'basket', title: 'Order Services', component: OrderServicePage },
      { icon: 'cog', title: 'Settings', component: SettingsPage },
      { icon: 'information-circle', title: 'About us', component: AboutPage }
    ];

    this.tab1 = DashboardPage;
    this.tab2 = BillingPaymentPage;
    this.tab3 = OrderServicePage;
    this.tab4 = SettingsPage;
    this.tab5 = MorePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout(){
    this.menu.close();
    this.nav.parent.setRoot(LoginPage);
  }

}
