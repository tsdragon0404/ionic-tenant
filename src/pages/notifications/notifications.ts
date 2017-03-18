import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

/*
  Generated class for the Notifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  hasPermission: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    LocalNotifications.hasPermission().then((res) => {
        this.hasPermission = res;
    });

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Notifications');
    console.log('ionViewDidLoad NotificationsPage');
  }


}
