import { Component, OnInit } from '@angular/core';
import { questionservice } from 'src/questionservice';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  constructor(private questionserv:questionservice) { }
  ngOnInit(): void {
  }
  selected=""
  nselect=""
  diffselect=""
  cat_list = ["Arts & Literature","Film & TV","Food & Drink","General Knowledge","Geography","History","Music","Science","Society & Culture","Sport & Leisure"];
  no_questions = ["5","10","20"];
  diff = ["easy","medium","hard"];

 onstart()
 {
  console.log("youclicked start"+this.selected+this.nselect+this.diffselect)
  this.questionserv.nc = this.selected
  this.questionserv.nq = this.nselect
  this.questionserv.nd = this.diffselect
  this.questionserv.fetchquestion()
 }


}
