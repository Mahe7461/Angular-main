import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ans-table',
  templateUrl: './ans-table.component.html',
  styleUrls: ['./ans-table.component.css']
})
export class AnsTableComponent implements OnInit {

  list:any=[];
 
  
  constructor(private service:SharedService) { }
  
  term:string;
  
  displayedU: string[] = ['OPtionId', 'Option','Link'];
  

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  data:any;
  

  
  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.data={
      OptionId:0,
      Option:"",
      
      Link:'',
    }
    this.ModalTitle="Add";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();

  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Edit";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
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
    this.service.getOptList().subscribe(values=>{
      this.list=values;
      
    });
  }
}