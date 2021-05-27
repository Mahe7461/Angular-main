import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import {MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { ValidatePassword } from 'src/app/registration/validate-password';
import {FormErrorMessages, formErrorMessages} from 'src/app/registration/form-errors-constant';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {
 // title='createadmin'
  username='';
  password='';
  email='';
  message='';
  public registrationForm: FormGroup;
  constructor(private service: SharedService,private formBuilder: FormBuilder,
    
     private messageService: MessageService ,private route: Router) { }
     public formErrorMessages:FormErrorMessages ;
     public submitted = false;
  public formValid: boolean;
  ngOnInit(): void {
    this.formErrorMessages = formErrorMessages;
    

    this.registrationForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(15)]],
        email: ['',[Validators.required, Validators.email]],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(64),
          Validators.pattern(/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)])],
        passwordConfirmation: ['', [Validators.required]],
        
      }, {
        validator: ValidatePassword.MatchPassword
      }
    )
    ;
  }
  

  create(){
    
    const regdata ={
      username: this.registrationForm.value.username,
     password: this.registrationForm.value.password,
     email: this.registrationForm.value.email,
    
  };

  
  this.service.adminreg(regdata).subscribe((data: any)=>{
  
    this.message = data.message
    if (data.token!=''){
      this.showSuccess()

    }
  })
   }
  back(){
    this.route.navigate(['/admin'])
  }
  showSuccess(){
    this.messageService.add({key: 'myKey1',severity:'success', summary: 'Success', detail:'registered successfully'})
  }
      
  onSubmit():boolean {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      this.formValid = false;
      return false;
    }
    this.formValid = true;
    console.log(this.registrationForm.value);
  }
  }

