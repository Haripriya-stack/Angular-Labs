import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-testme',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit,OnChanges {
  
title = 'Test Component';
messageClass: string = 'message';
@Input() username:string = '';
prevValue:string | undefined;
currValue:string | undefined;
constructor() {
  console.log("TestComponent constructor called"+new Date().toDateString());
}
ngOnChanges(changes: SimpleChanges): void {
   console.log("TestComponent ngOnChanges called"+new Date().toDateString());
  console.log(changes);
  if(changes['username'])
  {
    this.prevValue=changes['username'].previousValue;
    this.currValue=changes['username'].currentValue;
    
  }

}
ngOnInit(): void {
   console.log("TestComponent ngOnInit called"+new Date().toDateString());
}
age: number = 0;
  isEligible: boolean = false;
 employee = {
    id: 101,
    name: 'John',
    salary: 85000,
    department: 'IT',
    isActive: true,
    status: 'Inactive',
    leaveBalance: 12,
    probationEndDate: '2026-08-15'
  };
  checkEligibility() {
    this.isEligible = this.age >= 18;
  }

//ngClass dynamically adds or removes CSS classes based on component data or conditions.
//ngStyle dynamically applies inline CSS styles based on component data or conditions.
//They allow the UI appearance to change automatically when application state changes.
/*class
 └─ Static

[class]
 └─ One dynamic class string

ngClass
 └─ Many classes + conditions

and

style
 └─ Static

[style.color]
 └─ One dynamic CSS property

ngStyle
 └─ Many CSS properties + conditions*/


}
