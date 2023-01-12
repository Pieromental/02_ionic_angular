import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  usuarios:any[]=[]
  textoBuscar:string=''
  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.dataService.getData().subscribe(usuarios=>{
    this.usuarios=usuarios
   });
  }
  onSearchChange(ev:any){
    this.textoBuscar=ev.detail.value;
  }

}
