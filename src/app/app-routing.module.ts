import { FormulaireadminpostComponent } from './formulaireadminpost/formulaireadminpost.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoardAdminComponent } from './pages/administration/board-admin/board-admin.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { AllBlogsComponent } from './pages/administration/article/all-blogs/all-blogs.component';
import { AddBlogComponent } from './pages/administration/article/add-blog/add-blog.component';
import {
  PreservationsDetailsComponent,
} from './pages/article/preservations/preservations-details/preservations-details.component';

import { PreservationsComponent } from './pages/article/preservations/preservations.component';
import { RecipesComponent } from './pages/article/recipes/recipes.component';
import { UpdateBlogComponent } from './pages/administration/article/update-blog/update-blog.component';
import { RecipeDetailsComponent } from './pages/article/recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'preservations/details/:id', component: PreservationsDetailsComponent },
  { path: 'preservations', component: PreservationsComponent },
  { path: 'recipe', component: RecipesComponent },
  { path: 'articlepost', component: FormulaireadminpostComponent },
  { path: 'recipe/details/:id', component: RecipeDetailsComponent },
  { path: 'formupost', component: FormulaireadminpostComponent },
  {
    path: 'admin',
    component: BoardAdminComponent,
    children: [
      { path: 'all-blogs', component: AllBlogsComponent },
      { path: 'add-blog', component: AddBlogComponent },
      { path: 'update-blog/:id', component: UpdateBlogComponent },
      { path: 'formupost', component: FormulaireadminpostComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
