import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  Employeelist:any=[];
  constructor(private service:SharedService) { }
  displayedU: string[] = ['EmployeeId', 'Firstname', 'Lastname', 'Email', 'DOB','ContactNumber','Salary'];

  

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  EmployeeIdFilter:string="";
  FirstNameFilter:string="";
  EmployeeListWithoutFilter:any=[];


  
  ngOnInit(): void {
    this.refreshEmpList();
  }

  
  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();
  }

  

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values;
      
    });
  }
  
}


