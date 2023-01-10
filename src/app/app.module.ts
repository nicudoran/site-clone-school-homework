import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { FeaturesComponent } from './home/features/features.component';
import { FormularComponent } from './home/formular/formular.component';
import { LocationsComponent } from './home/locations/locations.component';
import { QuizComponent } from './quiz/quiz.component';
import { BacktoTopComponent } from './backto-top/backto-top.component';
import { TeamComponent } from './home/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    HeroSectionComponent,
    FeaturesComponent,
    FormularComponent,
    LocationsComponent,
    QuizComponent,
    ChangeBgDirective,
    BacktoTopComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CarouselModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
