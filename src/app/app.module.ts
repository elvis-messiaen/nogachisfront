import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './features/header/header.component';
import { CardComponent } from './features/card/card.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/account/login/login.component';
import { BoardAdminComponent } from './pages/administration/board-admin/board-admin.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { authInterceptorProviders } from './core/authentification/auth.interceptor';
import { AddBlogComponent } from './pages/administration/article/add-blog/add-blog.component';
import { AllBlogsComponent } from './pages/administration/article/all-blogs/all-blogs.component';
import { UpdateBlogComponent } from './pages/administration/article/update-blog/update-blog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { PreservationsDetailsComponent } from './pages/article/preservations/preservations-details/preservations-details.component';
import { CategoryComponent } from './cat/category/category.component';
import { PreservationsComponent } from './pages/article/preservations/preservations.component';
import { RecipesComponent } from './pages/article/recipes/recipes.component';
import { RecipeDetailsComponent } from './pages/article/recipes/recipe-details/recipe-details.component';
import { FilterPipe } from './pages/article/preservations/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    AddBlogComponent,
    AllBlogsComponent,
    UpdateBlogComponent,
    CategoryComponent,
    PreservationsComponent,
    RecipesComponent,
    PreservationsDetailsComponent,
    RecipeDetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
