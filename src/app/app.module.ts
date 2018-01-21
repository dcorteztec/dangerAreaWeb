import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DatamodelmapComponent } from './datamodelmap/datamodelmap.component';

import { DatamodelmapService } from './datamodelmap.service';


@NgModule({
  declarations: [
    AppComponent,
    DatamodelmapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DatamodelmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
