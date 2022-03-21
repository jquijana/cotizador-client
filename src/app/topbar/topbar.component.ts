import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '../app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public app:AppMainComponent) { }

  ngOnInit(): void {
  }

}
