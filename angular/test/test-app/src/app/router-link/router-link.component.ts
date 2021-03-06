import { Component, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
})
export class RouterLinkComponent {

  willEnter = 0;
  didEnter = 0;
  willLeave = 0;
  didLeave = 0;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {}

  navigate() {
    this.router.navigateByUrl('/router-link-page');
  }

  navigateForward() {
    this.navCtrl.navigateForward('/router-link-page');
  }

  navigateBack() {
    this.navCtrl.navigateBack('/router-link-page');
  }

  navigateRoot() {
    this.navCtrl.navigateRoot('/router-link-page');
  }

  ionViewWillEnter() {
    NgZone.assertInAngularZone();
    this.willEnter++;
  }
  ionViewDidEnter() {
    NgZone.assertInAngularZone();
    this.didEnter++;
  }
  ionViewWillLeave() {
    NgZone.assertInAngularZone();
    this.willLeave++;
  }
  ionViewDidLeave() {
    NgZone.assertInAngularZone();
    this.didLeave++;
  }
}
