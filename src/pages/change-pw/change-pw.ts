import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ChangePw page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-pw',
  templateUrl: 'change-pw.html'
})
export class ChangePwPage {

  updatePassword = {currentPassword: '', newPassword: '', confirmNewPassord: ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePwPage');
  }

}
