import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // set rootpage
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UsersPage },
      { title: 'GoogleMaps', component: GoogleMapsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
    //this.nav.setRoot(page.component);
  }
}
