import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  old_password='';
  new_password='';
  message='';
  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }
  changepass(){
      const updatedata=[
          this.old_password,
          this.new_password,

      ]
    this.service.putPassword(updatedata).subscribe((data: any)=>{
  
      this.message = data.message
    
    
    
    })
    
    
    
  }
}
