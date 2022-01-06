import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AppareilViewComponent } from './pages/appareil-view/appareil-view.component';
import { AuthComponent } from './core/auth/auth.component';
import { ListeRecetteComponent } from './pages/liste-recette/liste-recette.component';


const routes: Routes = [
  { path: 'listerecettes', component: ListeRecetteComponent },
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AccueilComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
