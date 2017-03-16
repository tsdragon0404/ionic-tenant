import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Storage } from '@ionic/storage';

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

  language: string;
  items: Array<{icon: string, title: string, component: any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public storage: Storage
  ) {

    this.items = [
      {icon: 'notifications', title: 'Notifications', component: NotificationsPage},
      {icon: 'key', title: 'Change Password', component: ChangePwPage}
    ];

    storage.ready().then(() => {
       storage.get('USER_LANG').then((val) => {
         
         this.language = /(vi|en)/gi.test(val) ? val : 'en';
          
       });
     });
  }

  ionChange(ev){

    this.language = /(vi|en)/gi.test(this.language) ? this.language : 'en';
    
    this.translate.use(this.language);

    this.storage.ready().then(() => {
       this.storage.set('USER_LANG', this.language);
     });
 
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
