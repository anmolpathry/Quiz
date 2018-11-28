import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  
  Usuarios = [];
  Correo = '';
  Password= '';


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage:Storage) {
    this.Usuarios = this.navParams.get('Usuario');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  ClickRegistrar(){
     if (this.Correo.length > 0 && this.Password.length > 0){

       this.Usuarios.push ({Correo: this.Correo, Contraseña: this.Password});
       this.storage.set('Usuarios', JSON.stringify(this.Usuarios));
       
     }
     


  }

}
