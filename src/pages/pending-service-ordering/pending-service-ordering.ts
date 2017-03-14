import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.items = [
      {title: 'House Repairs', count: 3, services: [
        {name: 'Plumbing', status: "PENDING_RESPONSE", serviceType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-25T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Anh Hung', cost: 5, comment: 'kitchen sink leaked', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "kitchen sink leak"}
          ]
        },
        {name: 'Painting', status: "REJECT", serviceType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-23T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-23T02:00:00-07:00").toISOString(), worker: 'Chu Cao', cost: 10, comment: 'main door painting', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "main door painting"},
            {status: "reject", date: new Date("2017-02-22T03:00:00Z").toISOString(), comment: "unavailable staff at that time, please change staff/time."}
          ]
        },
        {name: 'Electrics', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-25T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Anh Tuan', cost: 5, comment: 'AC breaked', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "AC breaked"},
            {status: "reject", date: new Date("2017-02-22T03:00:00Z").toISOString(), comment: "unavailable staff at that time, please change staff/time."},
            {status: "modify", date: new Date("2017-02-22T04:00:00Z").toISOString(), comment: "AC breaked"}
          ]
        }
      ] },
      {title: 'Home Services', count: 2, services: [
        {name: 'Cleaning', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Co Tam', cost: 5, comment: 'all floors', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "all floors"},
            {status: "reject", date: new Date("2017-02-22T03:00:00Z").toISOString(), comment: "unavailable staff at that time, please change staff/time."},
            {status: "modify", date: new Date("2017-02-22T04:00:00Z").toISOString(), comment: "all floors"}
          ]
        },
        {name: 'Laundry', status: "PENDING_RESPONSE", serviceType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-25T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Chi Thom', cost: 10, comment: 'all clothes and curtains', history: [
            {status: "create", date: new Date("2017-02-22T02:00:00Z").toISOString(), comment: "all clothes and curtains"}
          ]
        }
      ] },
      {title: 'Transporting', count: 0, services: null },
      {title: 'Food', count: 0, services: null },
    ];

  }

  ionViewDidLoad() {
    var previous = this.navParams.get('previous');
    if(previous) this.viewCtrl.setBackButtonText(previous);
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
