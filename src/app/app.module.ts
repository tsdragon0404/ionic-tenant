import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { HousingServicePage } from '../pages/housing-service/housing-service';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BillingPage } from '../pages/billing/billing';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ChangePwPage } from '../pages/change-pw/change-pw'
import { AboutPage } from '../pages/about/about';
import { RequestPage } from '../pages/request/request';
import { ProcessingPage, ModalContentPage } from '../pages/processing/processing';
import { HistoryPage, HistoryDetailPage } from '../pages/history/history';
import { CreateRequestPage } from '../pages/create-request/create-request';


import { BillingHomePage } from '../pages/billing-home/billing-home';
import { BillingPaymentPage } from '../pages/billing-payment/billing-payment';
import { BillingServicesPage } from '../pages/billing-services/billing-services';
import { BillingHistoryPage } from '../pages/billing-history/billing-history';

import { RentalPaymentPage } from '../pages/rental-payment/rental-payment';
import { UtilitiesPaymentPage } from '../pages/utilities-payment/utilities-payment';
import { ServicePaymentPage } from '../pages/service-payment/service-payment';
import { SettingPaymentPage } from '../pages/setting-payment/setting-payment';
import { ServiceDetailPage } from '../pages/service-detail/service-detail';

import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AccountPage,
    HousingServicePage,
    DashboardPage,
    BillingPage,
    SettingsPage,
    NotificationsPage,
    ChangePwPage,
    AboutPage,
    RequestPage,
    ProcessingPage,
    HistoryPage,
    ModalContentPage,
    CreateRequestPage,
    HistoryDetailPage,
    BillingHomePage,
    BillingServicesPage,
    BillingPaymentPage,
    BillingHistoryPage,
    RentalPaymentPage,
    UtilitiesPaymentPage,
    ServicePaymentPage,
    SettingPaymentPage,
    ServiceDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AccountPage,
    HousingServicePage,
    DashboardPage,
    BillingPage,
    SettingsPage,
    NotificationsPage,
    ChangePwPage,
    AboutPage,
    RequestPage,
    ProcessingPage,
    HistoryPage,
    ModalContentPage,
    CreateRequestPage,
    HistoryDetailPage,
    BillingHomePage,
    BillingServicesPage,
    BillingPaymentPage,
    BillingHistoryPage,
    RentalPaymentPage,
    UtilitiesPaymentPage,
    ServicePaymentPage,
    SettingPaymentPage,
    ServiceDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
