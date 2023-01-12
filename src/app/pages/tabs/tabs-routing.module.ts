import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'tab1',
        loadChildren:() => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path:'tab2',
        loadChildren:() => import('../card/card.module').then( m => m.CardPageModule)
      },
      {
        path:'tab3',
        loadChildren:() => import('../grid/grid.module').then( m => m.GridPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
