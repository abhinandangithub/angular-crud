import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './common/header/header.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { FormatPipe } from './shared/format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    HeaderComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    FormatPipe,
    CourseFormComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
