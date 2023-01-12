import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) {}
  ngOnInit() {
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToastOptions() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      position:'top',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          icon:'star',
          role: 'info',
          handler: () => { console.log('More Info Clicked') }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { console.log('Dissmiss Clicked') }
        }
      ]
    });
    await toast.present();
    await toast.onDidDismiss();
  }

}
