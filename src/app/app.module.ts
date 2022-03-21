import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigService } from './service/app.config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { AppMainComponent } from './app.main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    SidenavComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    PanelMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideMenuModule,
    MenuModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
