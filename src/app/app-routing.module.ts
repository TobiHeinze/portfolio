import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

const routes: Routes = [
	{ path: '', component: IntroComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'menu', component: MenuBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	anchorScrolling: 'enabled',
	scrollOffset: [0, 130], 
}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
