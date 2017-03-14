import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EmergencyRepairPage } from '../emergency-repair/emergency-repair';
import { HousingServiceOrderingPage } from '../housing-service-ordering/housing-service-ordering';
import { PendingServiceOrderingPage } from '../pending-service-ordering/pending-service-ordering';
import { WaitingServiceOrderingPage } from '../waiting-service-ordering/waiting-service-ordering';

/*
  Generated class for the OrderService page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-service',
  templateUrl: 'order-service.html'
})
export class OrderServicePage {

  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: 'Emergency Repair', component: EmergencyRepairPage },
      {title: 'Extend Services', component: HousingServiceOrderingPage },
      {title: 'Pending Services', component: PendingServiceOrderingPage },
      {title: 'Waiting Services', component: WaitingServiceOrderingPage }
    ];
  }

  openItem(item) {
    this.navCtrl.push(item.component, {
      previous: "Services"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderServicePage');
  }

}
