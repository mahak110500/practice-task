 import { NgModule } from '@angular/core';

// Importing forms module
import { FormsModule, ReactiveFormsModule }
from '@angular/forms';
import { BrowserModule }
from '@angular/platform-browser';
import { BrowserAnimationsModule }
from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './highlight.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';


@NgModule({
bootstrap: [
	AppComponent
],
declarations: [
	AppComponent,
 HighlightDirective,
 AccountComponent,
 NewAccountComponent,
 
 
],
imports: [
	FormsModule,
	BrowserModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	NgbModule
]
})
export class AppModule { }







