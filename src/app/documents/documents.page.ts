import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;

  constructor(public fb: FormBuilder,private myRoute: Router) { 

  this.formcontrol = this.fb.group({
    accname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    bankname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    accno: ['', [Validators.required]],
    mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
    mobile1: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
    fatname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    motname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    
    roles: this.fb.array(['USER']),
   });
  }
  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
  }
  get errorControl() {
    return this.formcontrol.controls;
  }

  getreg() {
      this.isSubmitted = true;
      if (!this.formcontrol.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        console.log(this.formcontrol.value)
      }
      {
        this.formcontrol.reset();
            this.myRoute.navigate(['/reference']);
          }
    }
}
