import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Slides, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the ExtendServicesDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-extend-services-detail',
  templateUrl: 'extend-services-detail.html'
})
export class ExtendServicesDetailPage {
  @ViewChild(Slides) slider: Slides;

  slidePecentage: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController) {
    
    this.slidePecentage = 0;
  }

  ionViewDidLoad() {
    this.slider.lockSwipeToNext(true);
    console.log('ionViewDidLoad ExtendServicesDetailPage');
  }

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", currentIndex);
    if((currentIndex + 1) >= this.slider.length() * 0.7){
      this.slidePecentage = ((currentIndex+1)/this.slider.length())*100;
    }
    else {
      this.slidePecentage = 0;
    }
  }

  dismiss(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to cancel?',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          handler: () => {
            this.viewCtrl.dismiss();

          }
        },{
          text: 'No',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  gotoNext(){
    this.slider.lockSwipeToNext(false);
    this.slider.update();
    this.slider.slideNext();
    this.slider.lockSwipeToNext(true);
  }

  gotoPrevious(){
    this.slider.update();
    this.slider.slidePrev();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm request service',
      message: 'Do you want to request this service?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            let loader = this.loadingCtrl.create({
              content: "Request submitting...",
              duration: 2000
            });
            loader.present().then(() => {
                this.viewCtrl.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }

}
