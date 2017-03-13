import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PendingTypeOverviewPage } from '../pending-type-overview/pending-type-overview';

/*
  Generated class for the PendingServiceOrdering page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pending-service-ordering',
  templateUrl: 'pending-service-ordering.html'
})
export class PendingServiceOrderingPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {title: 'House Repairs', count: 3, services: [
        {name: 'Plumbing', status: "PENDING_RESPONSE", serviceType: "NORMAL", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Anh Hung', cost: 5, comment: 'kitchen sink leaked'},
        {name: 'Painting', status: "REJECT", serviceType: "VIP", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Chu Cao', cost: 10, comment: 'main door painting'},
        {name: 'Electrics', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Anh Tuan', cost: 5, comment: 'AC breaked'}
      ] },
      {title: 'Home Services', count: 2, services: [
        {name: 'Cleaning', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Co Tam', cost: 5, comment: 'all floors'},
        {name: 'Laundry', status: "PENDING_RESPONSE", serviceType: "VIP", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Chi Thom', cost: 10, comment: 'all clothes and curtains'}
      ] },
      {title: 'Transporting', count: 0, services: null },
      {title: 'Food', count: 0, services: null },
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingServiceOrderingPage');
  }

  openItem(item) {
    if(item.count > 0){
      this.navCtrl.push( PendingTypeOverviewPage, item);
    }
    else {
      console.log('Nothing');
    }
  }

}
