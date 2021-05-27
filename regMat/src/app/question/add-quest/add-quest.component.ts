import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent implements OnInit {

  constructor(private service:SharedService) { }
list:any=[];


ActivateAddEditquesComp:boolean=false;
@Input() data:any;
EmployeeId:string;
Answer:string;
Question:string;
Link:string;
DepartmentsList:any=[];

ngOnInit(): void {
  this.EmployeeId=this.data.EmployeeId;
  
  this.Question=this.data.Question;
  
  }

addEmployee(){
   var val = {
            Question:this.Question,
   };
    this.service.addEmployee(val).subscribe(data=>{
    //alert(data.toString());
    
  });
  
  console.log(val)
  this.closeClick();
}

updateEmployee(){
  var val = {
    EmployeeId:this.EmployeeId,
              
            Question:this.Question,
          
   };
  this.service.updateEmployee(val).subscribe(res=>{
 // alert(res.toString()
  
 // );
  console.log(res.toString()) 
  
});
  this.closeClick();
}
closeClick(){
  this.ActivateAddEditquesComp=false;
  this.refreshEmpList();
}



refreshEmpList(){
  this.service.getEmpList().subscribe(values=>{
    this.list=values;
    
  });
}



}
