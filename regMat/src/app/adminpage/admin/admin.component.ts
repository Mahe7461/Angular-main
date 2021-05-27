import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title='admin'
  term:string;
  create:boolean=false
  name=localStorage.getItem('username')
  constructor(private route: Router, private service:SharedService) { }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  Employeelist:any=[];
  
  displayedU: string[] = ['EmployeeId', 'Firstname', 'Lastname', 'Email', 'DOB','ContactNumber','Salary'];

  @ViewChild(MatSort) sorti: MatSort;

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  EmployeelistWithoutFilter=[];
  emp:any;
  EmployeeIdFilter:string="";
  FirstNameFilter:string="";
  EmployeeListWithoutFilter:any=[];


  
  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      FirstName:"",
      LastName:'',
      Email:'',
      DOB:'',
      Salary:'',
      Contact:'',
      Department:'',
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();

  }

  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
    this.route.navigate(['/admin'])
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values;
      
    });
    this.Employeelist.sorti= this.sorti;
  }
  FilterFn(){ 
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var FirstNameFilter = this.FirstNameFilter;

    this.Employeelist = this.EmployeeListWithoutFilter.filter(function (l){
        return l.EmployeeId.toString().toLowerCase().includes(
          EmployeeIdFilter.toString().trim().toLowerCase()
        )&&
        l.FirstName.toString().toLowerCase().includes(
          FirstNameFilter.toString().trim().toLowerCase()
        )
    });
    

}
//sortResult(prop,asc){
  //this.Employeelist = this.EmployeeListWithoutFilter.sort(function(a,b){
    //if(asc){
      //  return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    //}else{
     // return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    //}
  //})
//}



createadmin(){
  this.create=true
  this.route.navigate(['/createadmin'])

}
logout(){
  this.route.navigate(['/adminpage'])
  localStorage.clear()
  
  console.log(this.ModalTitle)
}
resetpass(){
  this.route.navigate(['/resetpassword'])
}
sortResult(prop,asc){
  this.Employeelist = this.EmployeelistWithoutFilter.sort(function(a,b){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}
key:string= 'id'
reverse: boolean = false;
sort(key){
  this.key = key;
  this.reverse= !this.reverse;
}

}
