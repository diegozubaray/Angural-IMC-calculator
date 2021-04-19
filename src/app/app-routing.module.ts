import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { ResultadoComponent } from './component/resultado/resultado.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'resultado/:valor',component:ResultadoComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
