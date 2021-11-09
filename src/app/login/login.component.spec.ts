import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppModule} from '../app.module'
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AppModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // component.users.email.setValue("radhu@gmail.com");
    // component.users.password.setValue("radhu123");
    expect(component).toBeTruthy();
  });
});
