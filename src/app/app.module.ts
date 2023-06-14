import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import modulos
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { MaterialModule } from './modules/Material/material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
