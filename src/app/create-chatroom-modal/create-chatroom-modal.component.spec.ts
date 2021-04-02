import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatroomModalComponent } from './create-chatroom-modal.component';

describe('CreateChatroomModalComponent', () => {
  let component: CreateChatroomModalComponent;
  let fixture: ComponentFixture<CreateChatroomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChatroomModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChatroomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
