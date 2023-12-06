import { Component } from '@angular/core';
import { Network } from '@capacitor/network';
import { ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  networkStatus: ConnectionStatus = {
    connected: false,
    connectionType: 'none'
  };

  constructor() {
    this.checkNetworkStatus();
  }

  async checkNetworkStatus() {
    this.networkStatus = await Network.getStatus();
  }
}
