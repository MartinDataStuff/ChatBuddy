import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCredentialInputComponent } from './user-credential-input.component';

describe('UserCredentialInputComponent', () => {
  let component: UserCredentialInputComponent;
  let fixture: ComponentFixture<UserCredentialInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCredentialInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCredentialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
