import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes!:Observable<Componente[]>
  constructor(private menuCtrl:MenuController,
    private dataServive:DataService) { }
  
  ngOnInit() {
    this.componentes=this.dataServive.getMenu();
  }
  
  
  mostrarMenu(){
    this.menuCtrl.open('first')
  }

}
