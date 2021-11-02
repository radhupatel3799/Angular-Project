import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThirdComponent } from './add-third.component';

describe('AddThirdComponent', () => {
  let component: AddThirdComponent;
  let fixture: ComponentFixture<AddThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
