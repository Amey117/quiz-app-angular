import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { shuffle } from 'lodash';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input() question:any
  @Input() number:any;
  @Output() userans = new EventEmitter<{qno:number,uans:string,upoints:number}>()
  options:any=[]
  points:number=0
  optionselected:any
  highlight:boolean[]=[false,false,false,false];
  iscorrect:boolean=false
  oncesubmitted:any
 
  ngOnInit(): void {
      this.options.push(...this.question["incorrectAnswers"])
      this.options.push(this.question["correctAnswer"])
      this.options= shuffle(this.options)
      console.log("inside questionlist",this.question)
      console.log("after shuffling",this.options)
  }
  checkanswer()
  {

  }
  hightlight_i(index:any)
  {
    for(var i=0;i<4;i++)
    {
      if(i==index)
      {
        this.highlight[i]=true;
      }
      else
      {
        this.highlight[i]=false;
      }
    }
  }
  correct_index(correctAnswer:any)
  {
    for(var i=0;i<4;i++)
    {
      if(this.options[i]==correctAnswer)
      {
        return i;
      }
    }
    return -1;
  }
  ansgiven(result:any,qno:number,i:number)
  {
    this.oncesubmitted=true;
    console.log("you clicked the ",result.target.value,"for question no ",qno)
    // this.highlight[i]=true
    this.hightlight_i(i)
    if(result.target.value==this.question["correctAnswer"])
    {
     this.points=1
     this.iscorrect=true
    }
    else
    {
      this.points=0
      this.iscorrect=false
      var correctindex = this.correct_index(this.question["correctAnswer"])
      console.log("correct ans for the question no"+this.number+"is"+correctindex)
    }
    this.userans.emit({qno:qno,uans:result.target.value,upoints:this.points})
  }

}
