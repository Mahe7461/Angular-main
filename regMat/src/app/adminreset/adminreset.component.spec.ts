import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresetComponent } from './adminreset.component';

describe('AdminresetComponent', () => {
  let component: AdminresetComponent;
  let fixture: ComponentFixture<AdminresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
