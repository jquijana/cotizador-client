import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'', redirectTo:'ventas', pathMatch:'full'},
  // {path:'login', component:LoginComponent},
  // {path:'home', component:HomeComponent},
  // { path: 'ventas', loadChildren: () => import('./modulos/ventas/ventas.module').then(m => m.VentasModule), 
  //   //canActivate: [AuthGuard]
  // }

  {
    path: '', component: AppMainComponent,
    children: [
      {path:'', redirectTo:'ventas', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path: 'ventas', loadChildren: () => import('./modulos/ventas/ventas.module').then(m => m.VentasModule), 
          //canActivate: [AuthGuard]
      }

  ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
