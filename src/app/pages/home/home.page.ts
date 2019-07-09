import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public router: Router
  ) {}
  login($event , name) {
      this.router.navigate(name);
  }
}
