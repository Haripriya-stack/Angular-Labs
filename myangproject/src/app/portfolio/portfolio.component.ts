import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
constructor() {
  console.log("PortfolioComponent constructor called");
}
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }
   formSubmit() {
    this.submitted = true;
    this.showHeading = false;
  }

  formEdit() {
    this.submitted = false;
    this.showHeading = true;
  }

}
