import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path:'/ModifyContent', 
    component: ModifyContentComponentComponent 
  },
  { 
    path:'**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }
