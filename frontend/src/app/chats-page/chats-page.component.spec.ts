import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsPageComponent } from './chats-page.component';

var a = 5;

describe('ChatsPageComponent', () => {
  let component: ChatsPageComponent;
  let fixture: ComponentFixture<ChatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
