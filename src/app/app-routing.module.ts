import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BoardAdminComponent } from './pages/administration/board-admin/board-admin.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { AllBlogsComponent } from './pages/administration/article/all-blogs/all-blogs.component';
import { AddBlogComponent } from './pages/administration/article/add-blog/add-blog.component';
<<<<<<< HEAD
import { UpdateBlogComponent } from './pages/administration/article/update-blog/update-blog.component';
import { PreservationsDetailsComponent } from './pages/article/preservations/preservations-details/preservations-details.component';

=======
import { BlogDetailsComponent } from './pages/article/article-details/blog-details.component';
import { UpdateBlogComponent } from './pages/administration/article/update-blog/update-blog.component';
import { PreservationsComponent } from './pages/article/preservations/preservations.component';
import { RecipesComponent } from './pages/article/recipes/recipes.component';
>>>>>>> 8ffca259d442ed9312b1fd2be291410686ce8f75

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
<<<<<<< HEAD
  { path: 'preservations/details', component: PreservationsDetailsComponent },
=======
  { path: 'preservations', component: PreservationsComponent },
  { path: 'recipe', component: RecipesComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
>>>>>>> 8ffca259d442ed9312b1fd2be291410686ce8f75
  {
    path: 'admin',
    component: BoardAdminComponent,
    children: [
      { path: 'all-blogs', component: AllBlogsComponent },
      { path: 'add-blog', component: AddBlogComponent },
      { path: 'update-blog/:id', component: UpdateBlogComponent },
    ],
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
