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

  it('should add data to the login form and pass validation', () => {
    let mockMail = component.loginForm.controls['email']
    mockMail.setValue('test-user@gmail.com');
    let mockPass = component.loginForm.controls['password']
    mockPass.setValue('@#PFE^60-!');

    let testLoginForm = {
      email: 'test-user@gmail.com',
      password: '@#PFE^60-!'
    }

    component.onSubmit();

    expect(component.loginForm.value).toEqual(testLoginForm);
    expect(mockMail.valid).toBeTruthy();
    expect(mockPass.valid).toBeTruthy();
  });

  it('should fail validation when inputs are blank', () => {
    let mockMail = component.loginForm.controls['email'];
    let mockPass = component.loginForm.controls['password'];
    expect(mockMail.valid).toBeFalsy();
    expect(mockPass.valid).toBeFalsy();
  });

  it('should fail validation when inputs don\'t match validation arguments', () => {
    let mockMail = component.loginForm.controls['email']
    mockMail.setValue('dsfsdfsd');

    let mockPass = component.loginForm.controls['password']
    mockPass.setValue('32q');
    
    expect(mockMail.valid).toBeFalsy();
    expect(mockMail.valid).toBeFalsy();
  });
});
