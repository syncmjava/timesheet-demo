import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IdInputPage } from '../pages/id-input/id-input';
import { CheckInOutPage } from '../pages/check-in-out/check-in-out';
import { CheckResultPage } from '../pages/check-result/check-result';
import { CheckResultInPage } from '../pages/check-result-in/check-result-in';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IdInputPage,
    CheckInOutPage,
    CheckResultPage,
    CheckResultInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IdInputPage,
    CheckInOutPage,
    CheckResultPage,
    CheckResultInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
