import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
templateUrl: 'admin.component.html'
})
export class AdminComponent {
    constructor(private service: SharedService,
                private router: Router) { }
        username:string;
        password:string;
        message:string;
        comp:boolean;
        invaildlogin:boolean;
        logout() {
            //this.auth.clear();
            this.router.navigateByUrl('/');
        }
        login(){
            const logindata ={
             username: this.username,
            password: this.password
         };
         this.service.adminlogin(logindata).subscribe((data: any)=>{
           
           this.message = data.message
         
         if (data.token){
           window.localStorage.setItem('token',data.token)
           this.comp=true;
           console.log(this.message,data.token)
           
         }else {
             this.invaildlogin= true;
             alert(data.message) 
             console.log(this.invaildlogin,'username or password invaild')
           
         }
         })
        }
    }