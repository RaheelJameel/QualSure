import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeVerifyComponent } from './degree-verify.component';

describe('DegreeVerifyComponent', () => {
  let component: DegreeVerifyComponent;
  let fixture: ComponentFixture<DegreeVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
