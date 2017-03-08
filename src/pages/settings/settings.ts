import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

import { NotificationsPage } from '../notifications/notifications';
import { ChangePwPage } from '../change-pw/change-pw';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  items: Array<{icon: string, title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {icon: 'notifications', title: 'Notifications', component: NotificationsPage},
      {icon: 'key', title: 'Change Password', component: ChangePwPage}
    ];

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openSetting(event, item){
    this.navCtrl.push(item.component);
  }

  test() {
    console.log('clicked test SettingsPage');
    LocalNotifications.schedule({
      id: 1,
      title: "Test Title",
      text: "Delayed Notification",
      at: new Date(new Date().getTime() + (5 * 1000))
    });
  }

}
