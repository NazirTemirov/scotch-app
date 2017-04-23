import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

import { Routes, RouterModule } from "@angular/router";
import { FilterPipe } from './filter.pipe';
import { LoggingService } from "app/logging.service";
import { DataService } from "app/data.service";

const appRoutes: Routes = [
    {path: 'contacts/:ninja', component: ContactsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
