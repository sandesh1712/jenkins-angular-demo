import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

 
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { } 
  tasks=[];
  task:string;

  ngOnInit(): void {
  }
  
  openSnackBar(result:string,action:string) {
    this.snackBar.open(result,action,{duration:1000});
  }

  validate()
  {
    if(this.task.length==0){
      this.openSnackBar("Empty Task","Error");
       return false;
    }
    else
      return true; 
  }

  add(){
   if(this.validate()){
    this.tasks.push({task:this.task,status:0});
    this.openSnackBar("Task Added","Success");
    this.task=""
   }
  }

  delete(index:number){
    this.tasks.splice(index,1);
  }

  changeStatus(index){
    if(this.tasks[index]["status"]==0)
    {
      this.tasks[index]["status"]=1
    }
    else
    this.tasks[index]["status"]=0
  }
}
