import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './services/note.service';
import { HttpClientModule } from '@angular/common/http';

// Configuration Firebase
const firebaseConfigObj = {
  apiKey: "AIzaSyDc3teBt8obQ_l91JI4ZFyA-FgV4WbMxhw",
  authDomain: "usjt-ads-notable-notes.firebaseapp.com",
  databaseURL: "https://usjt-ads-notable-notes.firebaseio.com",
  projectId: "usjt-ads-notable-notes",
  storageBucket: "usjt-ads-notable-notes.appspot.com",
  messagingSenderId: "860439908529",
  appId: "1:860439908529:web:711ae93e544ee49b"
};
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
export const firebaseConfig = firebaseConfigObj

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService
  ]
})
export class AppModule {}
