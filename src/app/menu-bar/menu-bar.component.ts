import { Component } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

	constructor(public main: MainService) {
	}
}
