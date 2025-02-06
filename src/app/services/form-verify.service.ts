import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormVerifyService {
  changesSaved:boolean=false;
  constructor() { }

  saveChanges(saved:boolean){
    this.changesSaved=saved
  }

  getChangesStatus(){
    return this.changesSaved
  }
}
