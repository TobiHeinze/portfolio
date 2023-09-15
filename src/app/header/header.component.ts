import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

	constructor(public main: MainService) {
	}

	closeMenu() {
		this.main.closedMenuBar = true;
	}
}
