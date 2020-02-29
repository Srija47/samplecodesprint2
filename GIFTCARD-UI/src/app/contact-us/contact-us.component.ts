import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from  '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted=false;

  constructor( private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
  
    this.contactForm = this.formBuilder.group({
      fname: ['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],  
      lname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],
      email: ['',[Validators.required,Validators.email]],
      comment: ['',[Validators.required]]

    });
  }
  get f() { return this.contactForm.controls; }

  OnSubmit() {
  this.submitted=true;
      console.log('Your form data : ', this.contactForm.value);
      alert("We will reach you soon!!!");
  }

}
