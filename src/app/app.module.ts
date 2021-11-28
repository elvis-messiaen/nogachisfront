import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardrecetteComponent } from './cardrecette/cardrecette.component';
import { TestflexComponent } from './testflex/testflex.component';
import { FooterComponent } from './footer/footer.component';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SauvegardeComponent } from './sauvegarde/sauvegarde.component';
import { AccueilComponent } from './accueil/accueil.component';



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
