import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylogactivityComponent } from './mylogactivity.component';

describe('MylogactivityComponent', () => {
  let component: MylogactivityComponent;
  let fixture: ComponentFixture<MylogactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylogactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MylogactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
