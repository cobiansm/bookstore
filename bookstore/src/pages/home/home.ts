import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
books = [];
book = "";

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }



}
