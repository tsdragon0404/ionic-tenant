import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the RequestHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request-history',
  templateUrl: 'request-history.html'
})
export class RequestHistoryPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    //this.items = this.navParams.data;
    this.init();
  }

  init(){
    this.item = {
      name: this.navParams.data.name,
      histories: [
        { type: "create",
          typeName: "Create Request",
          createdUser: "Son Nguyen",
          img: "384923_2004775377693_2029981517_n.jpg",
          staff: "Anh Tuan",
          date: new Date("2017-02-22T02:00:00Z").toISOString(),
          costs: 5,
          comment: "dry cleaning"},
        { type: "reject",
          typeName: "Reject",
          createdUser: "System",
          img: "sys01.jpg",
          staff: "Anh Tuan",
          date: new Date("2017-02-22T03:00:00Z").toISOString(),
          costs: 5,
          comment: "unavailable staff at that time, please change staff/time."},
        { type: "modify",
          typeName: "Edited",
          createdUser: "Son Nguyen",
          img: "384923_2004775377693_2029981517_n.jpg",
          staff: "Co Tam",
          date: new Date("2017-02-22T04:00:00Z").toISOString(),
          costs: 5,
          comment: "dry cleaning"
        },
        { type: "approved",
          typeName: "Approved Request",
          createdUser: "System",
          img: "sys01.jpg",
          staff: "Co Tam",
          date: new Date("2017-02-22T04:00:00Z").toISOString(),
          costs: 5,
          comment: "dry cleaning"
        },
        { type: "approved",
          typeName: "Approved",
          createdUser: "Son Nguyen",
          img: "384923_2004775377693_2029981517_n.jpg",
          staff: "Co Tam",
          date: new Date("2017-02-22T05:00:00Z").toISOString(),
          costs: 5,
          comment: "dry cleaning"
        }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestHistoryPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  getColor(status){
    if(status == 'create')
      return 'primary';
    if(status == 'reject')
      return 'danger';
    if(status == 'modify')
      return 'primary';
    if(status == 'approved')
      return 'secondary';
  }

}
