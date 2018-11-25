import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

books = [
  {titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', year: '1952'},
  {titulo: 'For Whom the Bell Tolls', autor: 'Ernest Hemingway', year: '1940'}
]

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  clickLibro(b) {
    this.navCtrl.push(this.libro, {book: b})
  }

  nuevoLibro() {
    this.navCtrl.push(this.nuevoLibro, {books:this.books })
  }



}
