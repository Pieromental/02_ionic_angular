import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [ 'OK'],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text:'OK',
          handler:()=>{
            console.log("Clic en OK")
          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'rojo',
          handler:()=>{
            console.log("Clic en Cancelar")
          }
        }
    ],
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {
          text:'OK',
          handler:(data:any)=>{
            console.log('Confirm OK')
            console.log(data)

          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'rojo',
          handler:()=>{
            console.log("Clic en Cancelar")
          }
        }
      ],
      inputs: [
        {
          name:'Name1',
          placeholder: 'Name',
          type:'text'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        // INPUT type:date
        {
          name:'Date',
          type:'date',
          min:'2017-03-01',
          max:'2018-01-12',
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
