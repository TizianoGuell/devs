import { Component, OnInit } from '@angular/core';
import { Todo,ApisService } from '../../../services/apis.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-example',
  imports: [CommonModule],
  templateUrl: './get-example.component.html',
  styleUrl: './get-example.component.css'
})
export class GetExampleComponent implements OnInit{
  todos:Todo[]=[]

  constructor(private service:ApisService){

  }

  ngOnInit() {
    this.loadTodos()
  }

  loadTodos(){
    this.service.getTodos().subscribe({
      next:(data)=>this.todos=data,
      error:(err)=>console.error("Error: ",err)
    })
  }

  completedOnly(){
    this.service.getCompletedTodos().subscribe({
      next:(data)=>this.todos=data,
      error:(err)=>console.error("Error: ",err)
    })
  }
}

