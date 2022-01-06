import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { CardrecetteComponent } from './pages/cardrecette/cardrecette.component';
import { TestflexComponent } from './pages/testflex/testflex.component';
import { FooterComponent } from './features/footer/footer.component';
import { ListeRecetteComponent } from './pages/liste-recette/liste-recette.component';
import { AuthComponent } from './core/auth/auth.component';
import { AppareilViewComponent } from './pages/appareil-view/appareil-view.component';
import { SauvegardeComponent } from './pages/sauvegarde/sauvegarde.component';
import { AccueilComponent } from './pages/accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardrecetteComponent,
    TestflexComponent,
    FooterComponent,
    ListeRecetteComponent,
    AuthComponent,
    AppareilViewComponent,
    SauvegardeComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
