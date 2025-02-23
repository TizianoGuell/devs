import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  tiempo!:Observable<number>;
  constructor(){

  }

  iniciarCronometro(){
    this.tiempo=interval(1000).pipe(
      map(time=>time+1)
    )
  }

  pararCronometro(){}

}
