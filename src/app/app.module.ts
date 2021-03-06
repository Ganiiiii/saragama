import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AddUserComponent } from './add-user/add-user.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    MenuBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDHBhYaeGPQuVYpCodlXlhr3kkjjCsyHms",
      authDomain: "saragama-31d9e.firebaseapp.com",
      databaseURL: "https://saragama-31d9e.firebaseio.com",
      projectId: "saragama-31d9e",
      storageBucket: "saragama-31d9e.appspot.com",
      messagingSenderId: "124296449440",
      appId: "1:124296449440:web:e9648b3a0c14083ab5e8c5",
      measurementId: "G-DCZ0ZRQNJY"
    }),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
