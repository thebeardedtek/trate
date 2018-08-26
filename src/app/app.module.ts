import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CtaComponent } from './components/cta/cta.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FeesComponent } from './components/fees/fees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CtaComponent,
    SolutionsComponent,
    AboutComponent,
    FooterComponent,
    ContactFormComponent,
    FeesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
