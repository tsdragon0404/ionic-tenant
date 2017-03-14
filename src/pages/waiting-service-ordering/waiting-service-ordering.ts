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
        {name: 'Dry Cleaning', status: "WAITING", servieType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-03-15T02:00:00Z").toISOString(), scheduleTime: new Date("2017-03-15T02:00:00-07:00").toISOString(), worker: 'Co Tam', cost: 5, comment: 'Personel will contact before working. Thank you.', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "dry cleaning"},
            {status: "reject", date: new Date("2017-02-22T03:00:00Z").toISOString(), comment: "unavailable staff at that time, please change staff/time."},
            {status: "modify", date: new Date("2017-02-22T04:00:00Z").toISOString(), comment: "dry cleaning"},
            {status: "approved", date: new Date("2017-02-22T05:00:00Z").toISOString(), comment: "dry cleaning"}
          ]
        },
        {name: 'Lawn Mowing', status: "WAITING", servieType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-03-15T02:00:00Z").toISOString(), scheduleTime: new Date("2017-03-15T02:00:00-07:00").toISOString(), worker: 'Chu Cao', cost: 10, comment: 'garden', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "garden"},
            {status: "approved", date: new Date("2017-02-22T05:00:00Z").toISOString(), comment: "garden"}
          ]
        }
      ] },
      {title: 'Transporting', count: 1, services: [
        {name: 'Delivery', status: "WAITING", servieType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-03-15T02:00:00Z").toISOString(), scheduleTime: new Date("2017-03-15T02:00:00-07:00").toISOString(), worker: 'Anh Hung', cost: 5, comment: 'mail express', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "mail express"},
            {status: "approved", date: new Date("2017-02-22T05:00:00Z").toISOString(), comment: "mail express"}
          ]
        },
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
