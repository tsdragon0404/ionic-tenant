import { Component } from '@angular/core';
import { Platform, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Processing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-processing',
  templateUrl: 'processing.html'
})
export class ProcessingPage {

  pendings: Array<{icon: string, serviceName: string, status: string, servieType: string, personnel: string, comment: string, createdDate: Date}>;
  awaitings: Array<{icon: string, serviceName: string, status: string, servieType: string, personnel: string, comment: string, createdDate: Date}>;
  status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.status = "pending";

    this.pendings = [
      { icon: 'briefcase', serviceName: 'Dry Cleaning', status: "PENDING_RESPONSE", personnel: undefined, comment: "We have received your request.", servieType: "NORMAL", createdDate: new Date() },
      { icon: 'alert', serviceName: 'Taxi', status: "REJECT", personnel: undefined, comment: "Your request is not available. Please EDIT or CREATE new request.", servieType: "VIP", createdDate: new Date() },
      { icon: 'podium', serviceName: 'Fix Kitchen', status: "PENDING_RESPONSE", personnel: undefined, comment: "We have received your request.", servieType: "VIP", createdDate: new Date() },
      { icon: 'hand', serviceName: 'Taxi', status: "PENDING_APPROVAL", personnel: "Son Nguyen", comment: "We're ok. Please confirm your request.", servieType: "NORMAL", createdDate: new Date() }
    ];
    this.awaitings = [
      { icon: 'briefcase', serviceName: 'Dry Cleaning', status: "AWAITING", personnel: "Son Nguyen", comment: "Personel will contact before working. Thank you.", servieType: "NORMAL", createdDate: new Date() },
      { icon: 'alert', serviceName: 'Taxi', status: "AWAITING", personnel: "Son Nguyen", comment: "Personel will contact before working. Thank you.", servieType: "VIP", createdDate: new Date() },
      { icon: 'podium', serviceName: 'Fix Kitchen', status: "AWAITING", personnel: "Son Nguyen", comment: "Personel will contact before working. Thank you.", servieType: "VIP", createdDate: new Date() },
      { icon: 'hand', serviceName: 'Taxi', status: "AWAITING", personnel: "Son Nguyen", comment: "Personel will contact before working. Thank you.", servieType: "NORMAL", createdDate: new Date() },
    ];
  }

  openModal(item) {
    let modal = this.modalCtrl.create(ModalContentPage, item);
    modal.present();
  }

  getColor(status){
    if(status == 'PENDING_RESPONSE')
      return 'secondary';
    if(status == 'REJECT')
      return 'danger';
    if(status == 'PENDING_APPROVAL')
      return 'primary';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessingPage');
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      <ion-icon name="create"></ion-icon>
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
      <ion-list-header color="light">
        {{item.serviceName}}
      </ion-list-header>
      <ion-item>
        <ion-label>VIP Service?</ion-label>
        <ion-toggle checked="false" [(ngModel)]="item.useVIP" name="useVIP"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Start Date</ion-label>
        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="item.dateStart" name="dateStart"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Start Time</ion-label>
        <ion-datetime displayFormat="h:mm A" name="timeStart" pickerFormat="h mm A" [(ngModel)]="item.timeStart"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="item.comments" name="comments" placeholder="Comments"></ion-input>
      </ion-item>
  </ion-list>
  <div padding>
    <button ion-button round full (click)="create()">Save</button>
  </div>
</ion-content>
`
})
export class ModalContentPage {

  item: any;

  constructor(public platform: Platform, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = this.navParams.data;
    this.item.useVIP = this.item.servieType == 'VIP';
    this.item.dateStart = this.item.createdDate;
    this.item.timeStart = this.item.createdDate;
  }

  create(){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}