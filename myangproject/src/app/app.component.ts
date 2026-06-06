import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';//ngmodel
import {CommonModule} from '@angular/common';//ngforif,switch
//then CommonModule is not required for these control-flow blocks because they are built into the Angular compiler.
import { empInterface } from './empInterface';


@Component({  

  selector: 'app-root',
  imports: [TestComponent, FormsModule,CommonModule], 

  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges
{
  title = 'myangproject';
  srclink : string ='./assets/24962557.jpg';
  inputValue: any = '2-way input';
 numberInput: any = 0;
 //BELOW PROPERTY is to send value to child compoent
 //test component input prop receves this value via tag
 namefromParent:string='hi naresh sasi come';

 UpdateName(): void {
  console.log("updatebtn clicked");
  this.namefromParent='Hi charan naresh sasi deena';
 }


 constructor() {
   console.log("AppComponent constructor called"+new Date().toDateString());
 }
 ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent ngOnChanges called"+new Date().toDateString());
   console.log(changes);
 
 }
 ngOnInit(): void {
    console.log("AppComponent ngOnInit called"+new Date().toDateString());
 }
//getter method to calculate value based on numberInput
//example is a property, not a normal function.
//This is a computed property that returns the value of numberInput multiplied by 2. Whenever numberInput changes, calculatedValue will reflect the updated result when accessed.Be aware that getters are also evaluated during change detection
/*C#:
private string _name;
public string Name
{
    get { return _name; }
    set { _name = value; }
}*/

 get calculatedValue(): number {
    return this.numberInput * 2;
  }

  
private _price = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {

    if (value < 0) {
      throw new Error("Price cannot be negative");
    }

    this._price = value;
  }




  display2wayinput(input: any): void
  {
    alert("2-way input value: " + input);
  }


  display(msg:string)
  {
    alert("Image Clicked with message: " + msg);
  }
    displayEvent(e:KeyboardEvent)
  {
    console.log(e.key, e.code, e.altKey, e.ctrlKey, e.shiftKey,e.target,e.currentTarget);
  }
//ngif example
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

  isAdmin = true;
  isLoading = false;

  /*employees :empInterface[]=[
    {id: 101, name: 'John', salary: 85000, department: 'IT', isActive: true},
    {id: 102, name: 'Jane', salary: 90000, department: 'HR', isActive: false},
    {id: 103, name: 'Bob', salary: 75000, department: 'Finance', isActive: true}
  ]*/
employees :empInterface[]=[];
  //For old *ngFor, Angular's trackBy function has a
  //  fixed signature: trackByFn(index: number, item: T): any
  /*you're absolutely right that on the first page load, Angular must create all DOM elements.trackBy does NOT help during the initial render. It only helps during subsequent updates to the list, such as when items are added, removed, or reordered. During the initial render, Angular has no choice but to create all DOM elements for the items in the list.*/
  /*Angular sees:
Old Employee Object
New Employee Object
Different memory addresses.
Without trackBy, Angular may think:remove and recreate the DOM element for that item, even though the data is logically the same. With trackBy, Angular can recognize that the item with id 101 is the same logical entity, and it can reuse the existing DOM element instead of removing and recreating it. This optimization can lead to better performance, especially in larger lists, because it minimizes unnecessary DOM manipulations
*/
  trackRowById(index:number,item:empInterface):any
  {
   return item.id + "-" + index;
  }

  //ngtemplateoutlet example passing function reference to template
  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
