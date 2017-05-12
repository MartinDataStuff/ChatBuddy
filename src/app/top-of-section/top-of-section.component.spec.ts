import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfSectionComponent } from './top-of-section.component';

describe('TopOfSectionComponent', () => {
  let component: TopOfSectionComponent;
  let fixture: ComponentFixture<TopOfSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOfSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
