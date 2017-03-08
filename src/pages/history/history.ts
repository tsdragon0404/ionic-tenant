import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  itemSelected(){
    this.navCtrl.push(HistoryDetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}


@Component({
  template: `
  <ion-header>

  <ion-navbar>
    <button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
  </ion-navbar>

</ion-header>

<ion-content>
  <ion-card *ngFor="let item of items">
    <ion-card-header color="primary">
      {{item.serviceName}}
      <ion-note item-right>{{item.createdDate | date: 'dd/MM/yyyy'}}</ion-note>
    </ion-card-header>
    <ion-card-content>
      <p>Worker: Son Nguyen</p>
      <p>Cost: #100.00</p>
      <p>Service: VIP</p>
    </ion-card-content>
  </ion-card>
</ion-content>
`
})
export class HistoryDetailPage {

  items: Array<{icon: string, serviceName: string, status: string, servieType: string, createdDate: Date}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { icon: 'done-all', serviceName: 'Dry Cleaning', status: "FINISHED", servieType: "NORMAL", createdDate: new Date() },
      { icon: 'done-all', serviceName: 'Taxi', status: "FINISHED", servieType: "VIP", createdDate: new Date() },
      { icon: 'done-all', serviceName: 'Fix Kitchen', status: "FINISHED", servieType: "VIP", createdDate: new Date() },
      { icon: 'archive', serviceName: 'Taxi', status: "CANCEL", servieType: "NORMAL", createdDate: new Date() },
      { icon: 'archive', serviceName: 'CANCEL', status: "", servieType: "NORMAL", createdDate: new Date() }
    ];
  }
}
