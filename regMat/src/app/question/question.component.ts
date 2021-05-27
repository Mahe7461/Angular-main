import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question=[];
  constructor(private service:SharedService) { }
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  data:any;
  ActivateAddEditquesComp:boolean=false;
  Act:boolean=false;
  questionData='hi';
  
  
  ngOnInit(): void {
    this.refreshEmpList();
    
  }
  

  addClick(){
    this.data={
      
      
      Question:'',
      
    }
    this.ModalTitle="Add";
    this.ActivateAddEditquesComp=true;
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
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.ActivateAddEditquesComp=false;
    this.refreshEmpList();
  }



  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.question=values;
      
    });
  }
  passQues(item){
    this.data=item;    
    
    localStorage.setItem('Question',this.data)
  }

}
