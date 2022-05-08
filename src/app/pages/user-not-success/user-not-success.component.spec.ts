import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotSuccessComponent } from './user-not-success.component';

describe('UserNotSuccessComponent', () => {
  let component: UserNotSuccessComponent;
  let fixture: ComponentFixture<UserNotSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
