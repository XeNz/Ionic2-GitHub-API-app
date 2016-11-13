import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsMarker, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
import { UsersPage } from '../users/users';
import { HomePage } from '../home/home';
 
@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {
 
    map: GoogleMap;
 
    constructor(public navCtrl: NavController, public platform: Platform) {
        platform.ready().then(() => {
            this.loadMap();
        });
        
    }
 
    loadMap(){
 
        let centerlocation = new GoogleMapsLatLng(51.218282, 4.408796);
        let GROENPLAATS = new GoogleMapsLatLng(51.219504, 4.401028);

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': centerlocation,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');

             let meirMarker = this.map.addMarker({
              position: centerlocation,
              title: "MEIR",
              snippet: "Test123",
            });
            //  let groenplaatsMarker = this.map.addMarker({
            //   position: GROENPLAATS,
            //   title: "GROENPLAATS",
            //   snippet: "Test234",
            //   icon: 'blue',
            // });
             this.map.addMarker({
              position: GROENPLAATS,
              title: "GROENPLAATS",
              snippet: "Test234",
              icon: 'blue',
            }).then((marker: GoogleMapsMarker) => {
                     marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(() => { 
                         //marker.remove(); 
                         this.navCtrl.push(HomePage);
                         marker.hideInfoWindow();
                     });
             });

        });
 
    }
}
