import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component' ;

//import { ListComponent } from './employee/list.component' ;
import { ListComponent } from './employee/list/list.component' ;

import { AddeditComponent } from './employee/addedit/addedit.component' ;


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        AddeditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }