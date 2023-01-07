import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:"",component:LandingPageComponent,pathMatch: 'full'},
  {path:"quiz",component:QuizComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}) ],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
