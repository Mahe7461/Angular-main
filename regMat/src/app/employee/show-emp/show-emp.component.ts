import { AfterViewInit, Component, OnInit, Pipe, ViewChild } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { employee } from './emp';
//import {MatTableDataSource} from '@angular/material/table/table-data-source';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

export class ShowEmpComponent implements OnInit,  AfterViewInit {
  Employeelist:any=[];
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<employee>();
  constructor(private service:SharedService) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  term:string;
  
  displayedU: string[] = ['EmployeeId', 'Firstname', 'Lastname', 'Email', 'DOB','ContactNumber','Salary'];
  ///public dataSource = new MatTableDataSource<employee>();
  //dataSource = new MatTableDataSource(this.Employeelist);
  applyFilter(filterValue: string){
    this.dataSource.filter= filterValue.trim().toLowerCase();
  }

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
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
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values;
      
    });
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
sortResult(prop,asc){
  this.Employeelist = this.EmployeeListWithoutFilter.sort(function(a,b){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}
employ: employee[]=[];



}