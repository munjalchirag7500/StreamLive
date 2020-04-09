import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';
import { ContentComponent } from './content/content.component'
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {
        path:'',component:ContentComponent
      },
      {
        path:'play',component:PlayerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
