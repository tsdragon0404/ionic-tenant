import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { IonicStorageModule } from '@ionic/storage';

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
import { OrderServicePage } from '../pages/order-service/order-service';
import { EmergencyRepairPage } from '../pages/emergency-repair/emergency-repair';
import { HousingServiceOrderingPage } from '../pages/housing-service-ordering/housing-service-ordering';
import { PendingServiceOrderingPage } from '../pages/pending-service-ordering/pending-service-ordering';
import { StatisticServiceOrderingPage } from '../pages/statistic-service-ordering/statistic-service-ordering';
import { CommonServiceDetailPage } from '../pages/common-service-detail/common-service-detail';
import { PendingTypeOverviewPage } from '../pages/pending-type-overview/pending-type-overview';
import { PendingDetailPage } from '../pages/pending-detail/pending-detail';
import { WaitingServiceOrderingPage } from '../pages/waiting-service-ordering/waiting-service-ordering';
import { WaitingServiceOverviewPage } from '../pages/waiting-service-overview/waiting-service-overview';
import { WaitingServiceDetailPage } from '../pages/waiting-service-detail/waiting-service-detail';
import { MorePage } from '../pages/more/more';
import { RequestHistoryPage } from '../pages/request-history/request-history';

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
    ServiceDetailPage,
    OrderServicePage,
    EmergencyRepairPage,
    HousingServiceOrderingPage,
    PendingServiceOrderingPage,
    WaitingServiceOrderingPage,
    StatisticServiceOrderingPage,
    CommonServiceDetailPage,
    PendingTypeOverviewPage,
    PendingDetailPage,
    WaitingServiceOverviewPage,
    WaitingServiceDetailPage,
    MorePage,
    RequestHistoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicStorageModule.forRoot()
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
    ServiceDetailPage,
    OrderServicePage,
    EmergencyRepairPage,
    HousingServiceOrderingPage,
    PendingServiceOrderingPage,
    WaitingServiceOrderingPage,
    StatisticServiceOrderingPage,
    CommonServiceDetailPage,
    PendingTypeOverviewPage,
    PendingDetailPage,
    WaitingServiceOverviewPage,
    WaitingServiceDetailPage,
    MorePage,
    RequestHistoryPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    AuthService
  ]
})

export class AppModule {}

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
