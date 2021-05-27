import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {adminapi} from './admin/Admin'
import { SharedService } from '../shared.service';
import {MessageService} from 'primeng/api';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  title='adminpage'
    username='';
    password='';
    invaildform:boolean=false
    message='';
    ero='';
    invaildfor:boolean=true;
    public registrationForm: FormGroup;
  constructor(private route: Router,private Toastrser:ToastrService,private formBuilder: FormBuilder,
    private messageService: MessageService ,
    private service: SharedService) { }

  ngOnInit(): void {
    this.logout()
    
}
  ngOnChanges(){

  }
  ngDoCheck(){

  }
  ngAfterContentInit(){

  }
  ngAfterContentChecked(){
    
  }
  ngAfterViewInit(){
    
  }
  ngAfterViewChecked(){
    
  }
  ngDestory(){
    
  }
 logout(){
  window.localStorage.removeItem('token')
 }
  
  showSuccess(){
    this.messageService.add({key: 'myKey1',severity:'success', summary: 'Success', detail:'login successfully'})
  }
  showError(){
    this.messageService.add({key: 'myKey1',severity:'error', summary: 'Error', detail:'invaild users'})
  }
  
  toastsuccess(){
    this.Toastrser.success('login successfully', 'Success');
  }
  toasterror(){
    this.Toastrser.error('Invaild username or password', 'Error');
  }
  toastinfo(){
    //this.Toastrser.info('Your are not allowed', 'Info');
  }
  login(){
    debugger;
    
    const logindata ={
      username: this.username,
     password: this.password
  };
    
    this.service.adminlogin(logindata).subscribe((data: any)=>{
  
      this.message = data.token
    
   if (data.token){
    this.invaildfor=false
    //this.toastsuccess()
    this.showSuccess()
    window.localStorage.setItem('token',data.token)
    
    window.localStorage.setItem('username', this.username)
    console.log(this.message)
    this.route.navigate(['/admin'])
     
      
      } else{
     
     
      this.toasterror()
      this.showError()
      console.log('error invaild user and password') 
      
     
    }
    
    if(true){
      console.log('hi it is working')

    }
    });
     
      
    
    this.invaildfor=false
    }
  forget(){
    this.route.navigate(['/forget'])
    }
  
  }

