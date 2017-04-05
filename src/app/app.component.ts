import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, BackgroundMode } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  initPage : any = HomePage;

  constructor (
    public platform: Platform,
    public translate: TranslateService,
    public storage: Storage
  ) {
    
    this.initializeApp();
    this.translateConfig();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      BackgroundMode.enable();
    });
  }

  translateConfig() {
    var userLang = 'en';
 
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    this.storage.ready().then(() => {
      this.storage.get('USER_LANG').then((val) => {
        
        userLang = /(vi|en)/gi.test(val) ? val : 'en';
        this.storage.set('USER_LANG', userLang);
        this.translate.use(userLang);
       
      });
     });    
  }
}
