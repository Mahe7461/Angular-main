import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-ans-table',
  templateUrl: './add-edit-ans-table.component.html',
  styleUrls: ['./add-edit-ans-table.component.css']
})
export class AddEditAnsTableComponent implements OnInit {

  
  
  constructor(private service:SharedService) { }
  list:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() data:any;
  OptionId:string;
  Option:string;
  Link:string;
  
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.OptionId=this.data.OptionId;
    this.Option=this.data.Option;
    this.Link=this.data.Link;
    }

  add(){
     var val = {OptionId:this.OptionId,
                Option:this.Option,
              Link:this.Link,
           };
      this.service.addDepartment(val).subscribe(data=>{
      //alert(data.toString());
      
    });
    
    console.log(val)
    this.closeClick();
  }

  update(){
    var val = {OptionId:this.OptionId,
    Option:this.Option,
    Link:this.Link,
    };
    this.service.updateOption(val).subscribe(res=>{
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



