import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesEditComponent } from './ques-edit.component';

describe('QuesEditComponent', () => {
  let component: QuesEditComponent;
  let fixture: ComponentFixture<QuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
