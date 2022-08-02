import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionservice } from 'src/questionservice';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  constructor(private questionserv:questionservice,private router:Router) { 
    this.questions=this.questionserv.questions
    this.numberof_qs=this.questions.length;
  }

  questions:any=[]
  score:any;
  showans:boolean=true
  hidesubmit:boolean=true
  useranswer:{qno:number,uans:string,upoints:number}[] = []
  options:any=[]
  numberof_qs:any;
  showscore:boolean=false
  ngOnInit(): void {
      
  }
  storeallans(result:any){
   console.log("question json from api",this.questions)
   this.hidesubmit=false
   var flag = this.useranswer.findIndex(ele=> ele.qno==result.qno)
   if(flag>-1)
   {
    this.useranswer[flag]=result
   }
   else{
    this.useranswer.push(result);
   }
   console.log("useranswer array so far",this.useranswer)
  }
  cal_score()
  {
    console.log("inside cal score")
    this.showans=false
    this.score=0
    for(var i = 0 ;i<this.useranswer.length;i++)
    {
      if(this.useranswer[i]["upoints"]==1)
      {
        this.score=this.score+1;
      }
    }
    console.log("your score is " + this.score + "outof "+this.questions.length)
    this.showscore=true
    this.hidesubmit=true
  }
  show_ans()
  {
    
  }
  back_btn()
  {
   this.router.navigate(['/'])
  }
}
