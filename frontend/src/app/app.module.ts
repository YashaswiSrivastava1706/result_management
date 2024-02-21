import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    TeacherComponent,
    StudentComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
