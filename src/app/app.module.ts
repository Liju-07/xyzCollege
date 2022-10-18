import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const app:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"h",component:HomeComponent
  },
  {
    path:"adds",component:AddStudentComponent
  },
  {
    path:"addf",component:AddFacultyComponent
  },
  {
    path:"viewf",component:ViewFacultyComponent
  },
  {
    path:"views",component:ViewStudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddStudentComponent,
    AddFacultyComponent,
    ViewFacultyComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
