import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './features/header/header.component';
import { CardComponent } from './features/card/card.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {
  PreservationsDetailsComponent,
} from './pages/article/preservations/preservations-details/preservations-details.component';
import { CategoryComponent } from './cat/category/category.component';
import { PreservationsComponent } from './pages/article/preservations/preservations.component';
import { RecipesComponent } from './pages/article/recipes/recipes.component';
import { RecipeDetailsComponent } from './pages/article/recipes/recipe-details/recipe-details.component';
import { FormulaireadminpostComponent } from './formulaireadminpost/formulaireadminpost.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from './core/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
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
    FormulaireadminpostComponent,
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
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
