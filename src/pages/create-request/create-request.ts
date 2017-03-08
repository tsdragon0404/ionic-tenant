import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/*
  Generated class for the CreateRequest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-request',
  templateUrl: 'create-request.html'
})
export class CreateRequestPage {

  request = { name: "", useVIP: false, dateStart: null, timeStart: null, comments: "", worker: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.request.name = this.navParams.data.name;
    console.log(this.navParams.data); 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(){
    let loader = this.loadingCtrl.create({
      content: "Request submitting...",
      duration: 3000
    });
    loader.present().then(() => {
        this.viewCtrl.dismiss();
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRequestPage');
  }

}
