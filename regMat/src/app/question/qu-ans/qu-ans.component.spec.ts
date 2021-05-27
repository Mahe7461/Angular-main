import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuAnsComponent } from './qu-ans.component';

describe('QuAnsComponent', () => {
  let component: QuAnsComponent;
  let fixture: ComponentFixture<QuAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
