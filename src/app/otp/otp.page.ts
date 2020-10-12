import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;

  password_type: string = 'password';

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router) { 

      this.formcontrol = this.fb.group({
        pincode: ['', [Validators.required,(Validators.minLength(4)),(Validators.pattern("[0-9]{6}")),
          (Validators.maxLength(4)),]],
        roles: this.fb.array(['USER']),
       });
      }
    
  
  togglePasswordMode() {   
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
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
       
            this.myRoute.navigate(['/appln']);
          }
    }

}
