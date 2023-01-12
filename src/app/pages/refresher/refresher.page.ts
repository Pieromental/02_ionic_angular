import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  list:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  doRefresh(ev:any){
    setTimeout(()=>{
      this.list=Array(20);
      ev.target.complete();
    },1500)
  }

}
