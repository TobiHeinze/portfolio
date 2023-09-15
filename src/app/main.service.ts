import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  closedMenuBar: boolean = true;

  constructor() {}

  toggleMenu() {
    this.closedMenuBar = !this.closedMenuBar;
  }
}
