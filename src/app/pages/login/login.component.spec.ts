import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add data to the login form', () => {
    component.loginForm.controls['email'].setValue('test-user@gmail.com');
    component.loginForm.controls['password'].setValue('@#PFE^60-!');

    let testLoginForm = {
      email: 'test-user@gmail.com',
      password: '@#PFE^60-!'
    }

    component.onSubmit();

    expect(component.loginForm.value).toEqual(testLoginForm);
  })
});
