import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ans-edit',
  templateUrl: './ans-edit.component.html',
  styleUrls: ['./ans-edit.component.css']
})
export class AnsEditComponent implements OnInit {

  constructor(private service:SharedService) { }
  list:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() data:any;
  DepartmentId:string;
  Question:string;
  Link:string;
  Answer:string;
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.DepartmentId=this.data.DepartmentId;
    this.Question=this.data.FirstName;

    this.Link=this.data.LastName;
    }

  add(){
     var val = {DepartmentId:this.DepartmentId,
                Answer:this.Answer,
              Link:this.Link,
           };
      this.service.addDepartment(val).subscribe(data=>{
      //alert(data.toString());
      
    });
    
    console.log(val)
    this.closeClick();
  }

  update(){
    var val = {DepartmentId:this.DepartmentId,
    Answer:this.Answer,
    Link:this.Link,
    };
    this.service.updateDepartment(val).subscribe(res=>{
   // alert(res.toString()
    
   // );
    console.log(res.toString()) 
  });
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }
  


  refreshEmpList(){
    this.service.getDepList().subscribe(values=>{
      this.list=values;
      
    });
  }


}
