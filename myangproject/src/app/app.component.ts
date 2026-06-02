import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({  

  selector: 'app-root',
  imports: [TestComponent, FormsModule,CommonModule], 

  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangproject';
  srclink : string ='./assets/DLM_0932.jpg';
  inputValue: any = '2-way input';
 numberInput: any = 0;
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



  constructor()  {
    console.log("AppComponent constructor called");
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
    isActive: true
  };

  isAdmin = true;
  isLoading = false;
}
