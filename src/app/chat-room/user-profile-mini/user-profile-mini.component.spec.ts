import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileMiniComponent } from './user-profile-mini.component';

describe('UserProfileMiniComponent', () => {
  let component: UserProfileMiniComponent;
  let fixture: ComponentFixture<UserProfileMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
