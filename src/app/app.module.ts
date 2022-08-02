import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { QuestionComponent } from './question/question.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { questionservice } from 'src/questionservice';
import {HttpClientModule} from "@angular/common/http";
import { Routes, RouterModule} from '@angular/router';

import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


const appRoute:Routes = [{path:"",component:OptionsComponent,pathMatch:'full'},{path:"questionlist",component:QuestionlistComponent}]

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    QuestionComponent,
    QuestionlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [questionservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
