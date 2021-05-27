import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../shared.service';
import { Owner } from './ower';
@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
dataSource = new MatTableDataSource<Owner>();
  constructor(private repoService: SharedService) { }

  ngOnInit() {
    this.getAllOwners();
  }
  public getAllOwners = () => {
    this.repoService.getEmpList()
    .subscribe(res => {
      this.dataSource.data = res as Owner[];
    })
  }
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }
}

