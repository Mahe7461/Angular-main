import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  username='';
  password='';
  invaildform:boolean=false
  message='';
  form:boolean=false
constructor(private route: Router,//private Toastrser:ToastrService,private messageService: MessageService ,
  private service: SharedService) { }

ngOnInit(): void {this.message='';
}
formcon(){
  this.form=true

}
test(){
  this.route.navigate(['/usertable'])
}

login(){
  localStorage.removeItem('token')
  const logindata ={
    username: this.username,
   password: this.password
};
  
  this.service.adminlogin(logindata).subscribe((data: any)=>{

    this.message = data.token
    
  
  if (this.message!=""){
    this.invaildform=false
    window.localStorage.setItem('token',data.token)
    
    window.localStorage.setItem('username', this.username)
    console.log(this.message)
    this.route.navigate(['/admin'])
    } 
  else{
    console.log('hi')
    
  }
  
  })
  
  }

  
  

 
  loginp(){
    this.route.navigate(['/userlogin'])
  }
  regisp(){
    this.route.navigate(['/registration'])

  }

}
