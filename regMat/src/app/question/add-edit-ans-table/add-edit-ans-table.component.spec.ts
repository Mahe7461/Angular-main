import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAnsTableComponent } from './add-edit-ans-table.component';

describe('AddEditAnsTableComponent', () => {
  let component: AddEditAnsTableComponent;
  let fixture: ComponentFixture<AddEditAnsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAnsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
