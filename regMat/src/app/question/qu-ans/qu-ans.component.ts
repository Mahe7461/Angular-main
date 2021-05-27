import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-qu-ans',
  templateUrl: './qu-ans.component.html',
  styleUrls: ['./qu-ans.component.css']
})
export class QuAnsComponent implements OnInit {

  question=[];
  convalue:boolean=false;
  answer='';
  option='';
  answerlist=[this.answer,this.option]
  quesAns=[];
  lang:string[]=[
    'option1','option2','option3','option4'
  ];
  questionData='';
  
  constructor(private service:SharedService, private toast:ToastrService) { }
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  data:any;
  
  
 
  addClick(){
    this.data={
      DepartmentId:0,
      Answer:"",
      Question:'',
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
    this.refreshDepList();
  }



  refreshEmpList(){
    this.service.getDepList().subscribe(values=>{
      this.question=values;
      
    });
  }

  con(){
    if(confirm('Are you to save??')){
      this.convalue=true
    }
  }
  
  @Input() dep:any;
  DepartmentId:string;
  Answer:string;

  ngOnInit(): void {
    this. questionData=localStorage.getItem('Question')
    
    this.refreshEmpList();
    this.refreshDepList();
   }

  addDepartment(){
    var val = {DepartmentId: this.DepartmentId,
      Question:  this. questionData,
                Answer:this.answer+','+this.option};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
    this.refreshDepList();
    this.closeClick();
  }

  updateDepartment(){
    var val = {DepartmentId: this.DepartmentId,
      Question:  this. questionData,
      Answer:this.answer+','+this.option};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
    this.refreshDepList();
    this.closeClick();
    
  }
  refreshDepList(){
    this.service.getDepList().subscribe(values=>{
      this.quesAns=values;
      
    });
  }
  

}
