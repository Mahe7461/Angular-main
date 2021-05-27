import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { ResetRequestPayload } from '../reset-request.payload';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  new_password='';
  old_password='';
  message='';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private resetPasswordService: SharedService,
    //public translate: SharedService,
  ) {
    
  }
  space=''
  Authorization= 'token'+'\xa0'+localStorage.getItem('token');
  

  ngOnInit(): void {
   
  }
  login(){
    console.log(this.Authorization)
  }
  reset(){
    debugger;
    const data={
      old_password:this.old_password,
      new_password:this.new_password,
      

    }
    
    this.resetPasswordService.resetPassword(data).subscribe(data=>{
      alert(data.toString());
      
    });
}
  
  
}
