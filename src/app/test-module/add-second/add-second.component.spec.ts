import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecondComponent } from './add-second.component';

describe('AddSecondComponent', () => {
  let component: AddSecondComponent;
  let fixture: ComponentFixture<AddSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
