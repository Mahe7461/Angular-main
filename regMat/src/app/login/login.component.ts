import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter,first } from 'rxjs/operators';
import { loginva } from '../conslogin';
import { SharedService } from '../shared.service';
import { Emp } from '../_models/Emp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email='';
  Password='';
  Bdata: Emp[];
  Employeelist=[];
  invaildlogin:boolean= false;
  comp:boolean=false;
  message='';
  token='';
  constructor(private service:SharedService,private route: Router
    ) { }

  ngOnInit(): void { 
    this.refreshEmpList()
  }
  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values
      
      console.log(this.Employeelist)
    });
  }
  
 
  
login(){
   const logindata ={
    username: this.Email,
   password: this.Password
};
this.service.login(logindata).subscribe((data: any)=>{
  
  this.message = data.message

if (data.token){
  window.localStorage.setItem('token',data.token)
  this.comp=true;
  console.log(this.message,'tjuhgj',data.token)
  this.token=data.token
  console.log(this.token)
}else {
    this.invaildlogin= true;
    alert(data.message) 
    console.log(this.invaildlogin,'username or password invaild')
  
};


})




}
delay(){
  if (this.comp===false){
    this.invaildlogin= true;
    
    console.log(this.invaildlogin,'username or password invaild')
  
}
}

forget(){
  this.route.navigate(['/forget'])

}
}
function elif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

