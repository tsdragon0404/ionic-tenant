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
            { type: "create",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Anh Hung",
              date: new Date("2017-02-22T02:00:00Z").toISOString(),
              costs: 5,
              comment: "kitchen sink leak" }
          ]
        },
        {name: 'Painting', status: "REJECT", serviceType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-23T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-23T02:00:00-07:00").toISOString(), worker: 'Chu Cao', cost: 5, comment: 'main door painting', history: [
            { type: "create",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Chu Cao",
              date: new Date("2017-02-22T02:00:00Z").toISOString(),
              costs: 5,
              comment: "main door painting" },
            { type: "reject",
              role: "system",
              img: "sys01.jpg",
              staff: "Chu Cao",
              date: new Date("2017-02-22T03:00:00Z").toISOString(),
              costs: 5,
              comment: "unavailable staff at that time, please change staff/time."}
          ]
        },
        {name: 'Electrics', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-25T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Anh Tuan', cost: 5, comment: 'AC breaked', history: [
            { type: "create",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Anh Hung",
              date: new Date("2017-02-22T02:00:00Z").toISOString(),
              costs: 5,
              comment: "AC breaked" },
            { type: "reject",
              role: "system",
              img: "sys02.jpg",
              staff: "Anh Hung",
              date: new Date("2017-02-22T03:00:00Z").toISOString(),
              costs: 5,
              comment: "unavailable staff at that time, please change staff/time."},
            { type: "modify",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Anh Tuan",
              date: new Date("2017-02-22T04:00:00Z").toISOString(),
              costs: 5,
              comment: "AC breaked"}
          ]
        }
      ] },
      {title: 'Home Services', count: 2, services: [
        {name: 'Cleaning', status: "PENDING_APPROVAL", serviceType: "NORMAL", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Co Tam', cost: 5, comment: 'all floors', history: [
            { type: "create",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Anh Tuan",
              date: new Date("2017-02-22T02:00:00Z").toISOString(),
              costs: 5,
              comment: "all floors"},
            { type: "reject",
              role: "system",
              img: "sys01.jpg",
              staff: "Anh Tuan",
              date: new Date("2017-02-22T03:00:00Z").toISOString(),
              costs: 5,
              comment: "unavailable staff at that time, please change staff/time."},
            { type: "modify",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Co Tam",
              date: new Date("2017-02-22T04:00:00Z").toISOString(),
              costs: 5,
              comment: "all floors"}
          ]
        },
        {name: 'Laundry', status: "PENDING_RESPONSE", serviceType: "VIP", requestDate: new Date("2017-02-22T02:00:00Z").toISOString(), scheduleDate: new Date("2017-02-25T02:00:00Z").toISOString(), scheduleTime: new Date("2017-02-25T02:00:00-07:00").toISOString(), worker: 'Chi Thom', cost: 5, comment: 'all clothes and curtains', history: [
            { type: "create",
              role: "tenant",
              img: "tenant.jpg",
              staff: "Chi Thom",
              date: new Date("2017-02-22T02:00:00Z").toISOString(),
              costs: 5,
              comment: "all clothes and curtains" }
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
