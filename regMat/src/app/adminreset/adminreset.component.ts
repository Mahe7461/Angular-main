import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminreset',
  templateUrl: './adminreset.component.html',
  styleUrls: ['./adminreset.component.css']
})
export class AdminresetComponent implements OnInit {

  constructor(private service:SharedService) { }
  old_Password='';
  new_Password='';
  message='';

  ngOnInit(): void {
  }
  reset(){
    var resetdata={
      old_password:this.old_Password ,
      new_password:this.new_Password,
    }
    console.log(resetdata)
    
    this.service.resetPassword(resetdata).subscribe(data=>{
      alert(data.toString());
      
    });
  }

}
