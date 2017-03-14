import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { WaitingServiceOverviewPage } from '../waiting-service-overview/waiting-service-overview';

/*
  Generated class for the WaitingServiceOrdering page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-waiting-service-ordering',
  templateUrl: 'waiting-service-ordering.html'
})
export class WaitingServiceOrderingPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = [
      {title: 'House Repairs', count: 0, services: null },
      {title: 'Home Services', count: 2, services: [
        {name: 'Dry Cleaning', status: "WAITING", servieType: "VIP", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Co Tam', cost: 5, comment: 'Personel will contact before working. Thank you.'},
        {name: 'Lawn Mowing', status: "WAITING", servieType: "NORMAL", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Chu Cao', cost: 10, comment: 'garden'}
      ] },
      {title: 'Transporting', count: 1, services: [
        {name: 'Delivery', status: "WAITING", servieType: "VIP", requestDate: new Date().toISOString(), scheduleDate: new Date().toISOString(), scheduleTime: new Date().toISOString(), worker: 'Anh Hung', cost: 5, comment: 'mail express'},
      ]},
      {title: 'Food', count: 0, services: null },
    ];

  }

  ionViewDidLoad() {
    var previous = this.navParams.get('previous');
    if(previous) this.viewCtrl.setBackButtonText(previous);
    console.log('ionViewDidLoad WaitingServiceOrderingPage');
  }

  openItem(item) {
    if(item.count > 0){
      this.navCtrl.push( WaitingServiceOverviewPage, item);
    }
    else {
      console.log('Nothing');
    }
  }

}
