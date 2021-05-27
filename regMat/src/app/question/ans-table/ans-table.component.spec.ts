import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsTableComponent } from './ans-table.component';

describe('AnsTableComponent', () => {
  let component: AnsTableComponent;
  let fixture: ComponentFixture<AnsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
