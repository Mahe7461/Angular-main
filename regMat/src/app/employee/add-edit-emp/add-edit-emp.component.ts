import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService,private Toastrser:ToastrService) { }
  Employeelist:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() emp:any;
  EmployeeId:string;
  FirstName:string;
  LastName:string;
  Email:string;
  DOB:string;
  ContactNumber:string;
  Password:string;
  Gender:string;
  KnownLanguage:string;
  department:string;
  Country:string;
  State:string;
  City:string;
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.FirstName=this.emp.FirstName;
    this.LastName=this.emp.LastName;
    this.Email=this.emp.Email;
    this.DOB=this.emp.DOB;
    this.Gender=this.emp.gender;
    this.Country=this.emp.Country;
    this.State=this.emp.State;
    this.City=this.emp.City;
    this.KnownLanguage=this.emp.KnownLanguage;
    this.Password=this.emp.Password;
    this.department=this.emp.Department;
    this.ContactNumber=this.emp.ContactNumber;
  }

  addEmployee(){
     var val = {EmployeeId:this.EmployeeId,
                FirstName:this.FirstName,
              LastName:this.LastName,
            Email:this.Email,
          DOB:this.DOB,
        ContactNumber:this.ContactNumber,
      Department:this.department,
      Country:this.Country,
      Password:this.Password,
      State:this.State,
      City:this.City,
      Gender:this.Gender,
      KnownLanguage: this.KnownLanguage,};
      this.service.addEmployee(val).subscribe(data=>{
      //alert(data.toString());
      
    });
    this.toastsu()
    console.log(val)
    this.closeClick();
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
    FirstName:this.FirstName,
    LastName:this.LastName,
    Email:this.Email,
    DOB:this.DOB,
    Country:this.Country,
    Password:this.Password,
    State:this.State,
    City:this.City,
    Gender:this.Gender,
    KnownLanguage: this.KnownLanguage,
    Department:this.department,
    ContactNumber:this.ContactNumber,};
    this.service.updateEmployee(val).subscribe(res=>{
   // alert(res.toString()
    
   // );
    console.log(res.toString()) 
    this.toastsuccess()
  });
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }
  toastsuccess(){
    this.Toastrser.success('updated successfully', 'Success');
  }
  toastsu(){
    this.Toastrser.success('Registered successfully', 'Success');
  }
  toasterror(){
    this.Toastrser.error('Invaild username or password', 'Error');
  }
  toastinfo(){
    this.Toastrser.info('Your are not allowed', 'Info');
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values;
      
    });
  }

}
