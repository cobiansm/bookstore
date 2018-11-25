import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { VerLibroPage } from '../ver-libro/ver-libro';
import { NuevoLibroPage } from '../nuevo-libro/nuevo-libro';
import { GeneratedFile } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
libro = VerLibroPage;
newLibro = NuevoLibroPage;

books = [
  {titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', year: '1952', imagen: '../assets/great.jpg'},
  {titulo: 'For Whom the Bell Tolls', autor: 'Ernest Hemingway', year: '1940', imagen: '../assets/bells.jpg'}
]

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  clickLibro(b) {
    this.navCtrl.push(this.libro, {book: b})
  }

  nuevoLibro() {
    this.navCtrl.push(this.newLibro, {books:this.books })
  }



}
