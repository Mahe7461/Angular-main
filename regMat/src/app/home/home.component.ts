import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  user(){
    this.route.navigate(['/registration'])

  }
  addSingle() {
    //this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.messageService.add({key: 'myKey1', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});
  }
  admin(){
    this.route.navigate(['/adminpage'])
  }
}