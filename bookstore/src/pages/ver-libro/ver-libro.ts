import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerLibroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-libro',
  templateUrl: 'ver-libro.html',
})
export class VerLibroPage {
book = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.book= this.navParams.get('book');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerLibroPage');
  }

}
