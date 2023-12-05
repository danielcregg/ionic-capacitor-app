import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  coordinates: any;

  constructor() { }
  
  async locateMe() {
    const position = await Geolocation.getCurrentPosition();
    this.coordinates = position.coords;
  }
}
