import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit{

  @ViewChild('name') nameKey!: ElementRef;

  public name: string = "";
  public questionList:any=[];
  public currentQuestion:number=0;
  counter=120;
  correctAnswer:number=0;
  interval$:any;
  progress:string="120";
  isQuizStarted=false;
  isQuizCompleted:boolean=false;
  recommendation:string="Modulul 1";


  constructor(private questionService:QuestionService){}

  ngOnInit(): void {
    // this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    // this.startCounter();
  }

  getAllQuestions(){
    this.questionService.getQuestionJson().subscribe(res=>{this.questionList=res.questions})
  }

  nextQuestion(currentQno:number){
    this.currentQuestion++;
    if (currentQno===this.questionList.length) {
      this.isQuizCompleted=true;
      this.stopCounter();
      }
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQno:number,option:any){
    if (currentQno===this.questionList.length) {
      this.isQuizCompleted=true;
      this.stopCounter();
      }
    if (option.correct) {
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
      },1000);
    }
    else{
      setTimeout(()=>{
        this.currentQuestion++;
      },1000);
    }
  }

  startCounter(){
    this.interval$=interval(1000).subscribe(val=>{
      this.counter--;
      this.getProgressPercent();
      this.isQuizStarted=true;
      if (this.counter===0) {
        this.isQuizCompleted=true;
      }
    });
   }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }

  resetQuiz(){
    this.name="";
    this.stopCounter();
    this.isQuizStarted=false;
    this.isQuizCompleted=false;
    this.stopCounter();
    this.counter=120;
    this.currentQuestion=0;
    this.correctAnswer=0;
  }

  abortQuiz(){
    this.stopCounter();
    this.isQuizCompleted=true;
  }

  getProgressPercent(){
    this.progress=((this.counter/120)*100).toString();
     return this.progress;
  }
}
