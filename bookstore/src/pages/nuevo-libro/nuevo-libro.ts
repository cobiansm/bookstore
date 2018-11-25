import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NuevoLibroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-libro',
  templateUrl: 'nuevo-libro.html',
})
export class NuevoLibroPage {
titulo = "";
autor = "";
year= "";
imagen = "";
editorial = "";
books = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
      this.books = this.navParams.get('books');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoLibroPage');
  }

  agregarLibro() {
    if (this.titulo.length > 0) {
      this.books.push({titulo: this.titulo, autor: this.autor, year: this.year, editoial: this.editorial, imagen: '../assets/books.png'});
      this.navCtrl.pop();
    } else {
      const alert = this.alertCtrl.create ({
        title: 'Error',
        subTitle: 'Tu libro está incompleto',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
