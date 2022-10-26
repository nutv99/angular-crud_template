import { Component, OnInit } from '@angular/core';
import "@cdr/core/accordion/register.js"; 

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  open1 = false;
  passedValidation = false;

  open1Change(openChange: any) {
    let openState = openChange.detail;
    if (!openState && !this.passedValidation) {
      alert("you cannot close this panel");
    } else {
      this.open1 = openState;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}