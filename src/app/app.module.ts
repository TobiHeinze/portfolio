import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
// import { MainService } from './main.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectTemplateComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
