import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import {Storage} from '@ionic/storage'
import { CordovaProperty } from '@ionic-native/core';
import { containerRefreshEnd } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   registro = RegistrarPage; 

   Usuarios = [];

   Correo= '';
   Password= '';

   Usuario = [
    {
      Correo: '',
      Contraseña: ''
    }
   ]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public storage: Storage) {
      this.storage.keys()
      .then(keys => {
        if(keys.some(key => key == 'Usuarios')){
        this.storage.get ('Usuarios')
        .then(Usuarios => {
          this.Usuarios = JSON.parse(Usuarios)
        })
      }
      })

  }

  ClickIniciar(){
    let index = this.Usuarios. findIndex(Usuario => Usuario.Correo == this.Correo &&
      Usuario.Contraseña == this.Password);
     
      if(index >=0){
        const alert = this.alertCtrl.create({
          title: 'Yay!',
          subTitle: 'Usuario registrado',
          buttons: ['OK']
        });
        alert.present();
      }
      else{
        const alert2 = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Usuario no registrado',
          buttons: ['OK']
      });
      alert2.present();
    }
  }

  ClickRegistrar(){
    this.navCtrl.push(this.registro,{Usuario: this.Usuarios});
  }

  



}
