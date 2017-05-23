import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewChatroomComponent } from './add-new-chatroom.component';

describe('AddNewChatroomComponent', () => {
  let component: AddNewChatroomComponent;
  let fixture: ComponentFixture<AddNewChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
