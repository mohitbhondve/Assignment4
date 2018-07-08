import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { OperatingSystemsComponent } from './operating-systems/operating-systems.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { DatabasesComponent } from './databases/databases.component';

import { Routes , RouterModule } from '@angular/router';


 const routes : Routes =[
        { path: "databases" , component : DatabasesComponent },
        { path: "operatingSystems" , component : OperatingSystemsComponent },
        { path: "programmingLanguage" , component : ProgrammingLanguagesComponent }
      ];

@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemsComponent,
    ProgrammingLanguagesComponent,
    DatabasesComponent,
    ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
