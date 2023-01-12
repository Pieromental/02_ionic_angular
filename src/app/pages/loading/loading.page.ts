import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading!:HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  mostrarLoading(message:string){
    this.presentLoading(message);
    setTimeout(()=>{
      this.loading.dismiss();
    },2000)
  }
  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
      // duration: 3000,
    });

    this.loading.present();
  }
}
