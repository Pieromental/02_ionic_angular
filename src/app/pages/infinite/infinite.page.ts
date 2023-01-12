import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { never } from 'rxjs';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})

export class InfinitePage implements OnInit {
  data=Array(20);
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;
  constructor() { 
  }

  ngOnInit() {
  }
  loadData(event:any){
    setTimeout(()=>{
      if(this.data.length>50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled=true;
      }
      const nuevoArray=Array(20);
      this.data.push(...nuevoArray);
      // this.event.complete();
      this.infiniteScroll.complete();
    },1500)
    
  }

}
