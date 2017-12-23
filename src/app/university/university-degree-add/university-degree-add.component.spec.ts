import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDegreeAddComponent } from './university-degree-add.component';

describe('UniversityDegreeAddComponent', () => {
  let component: UniversityDegreeAddComponent;
  let fixture: ComponentFixture<UniversityDegreeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDegreeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDegreeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
