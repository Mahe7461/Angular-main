import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsEditComponent } from './ans-edit.component';

describe('AnsEditComponent', () => {
  let component: AnsEditComponent;
  let fixture: ComponentFixture<AnsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
