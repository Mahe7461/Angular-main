import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAnsComponent } from './sub-ans.component';

describe('SubAnsComponent', () => {
  let component: SubAnsComponent;
  let fixture: ComponentFixture<SubAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
