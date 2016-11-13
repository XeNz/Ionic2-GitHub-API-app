import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoogleMap, GoogleMapsEvent } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailsPage,
    GoogleMapsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailsPage,
    GoogleMapsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
