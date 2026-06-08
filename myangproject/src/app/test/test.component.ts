import { AfterContentInit,AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ContentChild, ElementRef, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Console } from 'node:console';

@Component({
  selector: 'app-testme',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  
   private previousContentProjected = '';
   //to get parent projected content dom element ref from its own template
@ContentChild('para') para!:ElementRef; 
//to directly get dom element ref from its own template
@ViewChild('wrapper') divref!:ElementRef;
 
title = 'Test Component';
messageClass: string = 'message';
@Input() Parentnamereceived:string = '';

@Input() Parentlistreceived:string[]=[];

@Input() parentObjectreceived:any;
//for object 
prevValue:string | undefined='NULL';
currValue:string | undefined;

constructor() {
  console.log("TestComponent constructor called"+new Date().toDateString());
}
ngOnChanges(changes: SimpleChanges): void {
   console.log("TestComponent ngOnChanges called"+new Date().toDateString());
  console.log(changes);
  if(changes['Parentnamereceived'])
  {
    console.log(
        `Name changed from '${changes['Parentnamereceived'].previousValue}' to '${changes['Parentnamereceived'].currentValue}'`
      );
   
  }
  if(changes['Parentlistreceived'])
  {
    console.log(
        `Name changed from '${changes['Parentlistreceived'].previousValue}' to '${changes['Parentlistreceived'].currentValue}'`
      );
   
  }
   if(changes['parentUserObject'])
  {
     console.log(
        `Name changed from '${changes['parentUserObject'].previousValue}' to '${changes['parentUserObject'].currentValue}'`
      );
   
    
  }

}
ngOnInit(): void {
   console.log("TestComponent ngOnInit called"+new Date().toLocaleTimeString());
    
}
 ngDoCheck(): void {
    console.log("TestComponent ngDoCheck called"+new Date().toLocaleTimeString());
if(this.prevValue!== this.parentObjectreceived?.city)
{
    console.log(
        `Name changed from '${this.prevValue}' to '${this.parentObjectreceived?.city}'`
      );
      this.prevValue= this.parentObjectreceived?.city;
}

 }
 ngAfterContentInit(): void {
    console.log("TestComponent ngAfterContentInit called"+new Date().toLocaleTimeString());
    this.previousContentProjected = this.para.nativeElement.textContent;
 }
 ngAfterContentChecked() {
    console.log("TestComponent ngAfterContentChecked called"+new Date().toLocaleTimeString());
 const currentText = this.para?.nativeElement?.textContent;
            console.log(
        `Content changed:  ${currentText}`
      );
       if (currentText !== this.previousContentProjected) {

      console.log(
        'Content changed:',
        this.previousContentProjected,
        '->',
        currentText
      );

      this.previousContentProjected = currentText;
    }
  }

ngAfterViewInit(): void {
 
   console.log("TestComponent ngAfterViewInit called"+new Date().toLocaleTimeString());
    console.log(this.divref.nativeElement.textContent);
}
 ngAfterViewChecked(): void {
   console.log("TestComponent ngAfterViewChecked called"+new Date().toLocaleTimeString());
       console.log( this.divref?.nativeElement?.textContent?.trim());
         console.log(
    'Length:',
    this.divref?.nativeElement?.textContent?.length,
    'Value:',
    JSON.stringify(this.divref?.nativeElement?.textContent?.trim())
  );
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
