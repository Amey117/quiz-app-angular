import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { firstValueFrom } from "rxjs"
@Injectable()
export class questionservice{

    nq:string=""
    nc:string=""
    nd:string=""
    questions:any=[]
   constructor(private http: HttpClient,private router:Router){}
   url_transform(nc:string)
   {
    return nc.replace(" & ","_and_")
   }
   
   userinput(){
     
   }
   display()
   {
    console.log(this.nq,this.nc,this.nd)
   }
   async fetchquestion()
   {
    this.nc=this.url_transform(this.nc)
    var url_endpoint = `https://the-trivia-api.com/api/questions?categories=${this.nc}&limit=${this.nq}&difficulty=${this.nd}`
    console.log("requesting to ...." + url_endpoint )
    this.questions = await firstValueFrom(this.http.get(url_endpoint))
    console.log("loding questions.....",this.questions)
    this.router.navigate(["/questionlist"])
   }

}
