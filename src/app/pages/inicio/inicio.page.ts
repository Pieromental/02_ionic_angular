import { Component, OnInit } from '@angular/core';
interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[]=[
    {
      icon:'arrow-up-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'person-circle-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'heart-circle-outline',
      name:'Buttons',
      redirectTo:'/buttons'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    }
];
  constructor() { }

  ngOnInit() {
  }

}
