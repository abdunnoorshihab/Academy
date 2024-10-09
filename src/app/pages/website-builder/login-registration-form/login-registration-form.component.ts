import {Component, EventEmitter, inject, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UtilsService} from '../../../services/core/utils.service';
import {BD_FLAG_SVG} from '../../../core/utils/app-data';

@Component({
  selector: 'app-login-registration-form',
  templateUrl: './login-registration-form.component.html',
  styleUrl: './login-registration-form.component.scss'
})
export class LoginRegistrationFormComponent implements OnInit, OnDestroy {

  // Store variables
  bdFlag = BD_FLAG_SVG;
  @ViewChild('formElement') formElement: NgForm;
  @Output() onSubmitForm = new EventEmitter();
  dataForm: FormGroup;
  activityType: 'login' | 'signup' | '' = '';

  // Form Controls
  phoneNoCtrl: FormControl = new FormControl(null, Validators.required);
  passwordCtrl: FormControl = new FormControl();
  otpCtrl: FormControl = new FormControl();
  nameCtrl: FormControl = new FormControl();

  // Inject
  private readonly fb = inject(FormBuilder);
  private readonly utilsService = inject(UtilsService);


  ngOnInit() {
    this.initForm();
  }

  /**
   * Form Methods business
   * initForm()
   */
  initForm() {
    this.dataForm = this.fb.group({
      phoneNo: this.phoneNoCtrl,
      password: this.passwordCtrl,
      otp: this.otpCtrl,
      name: this.nameCtrl,
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      return;
    }

    if (this.activityType === 'login') {
      // TODO: User Login Control
      this.onSubmitForm.emit(this.dataForm.value);
    } else if (this.activityType === 'signup') {
      // TODO: OTP Verification & User Signup Control
      this.onSubmitForm.emit(this.dataForm.value);
    } else {
      // TODO: Check User Auth
      setTimeout(() => {
        this.activityType = 'signup';
      }, 200)
    }


  }

  get submitBtnText() {
    if (this.activityType === 'login') {
      return 'Login';
    } else if (this.activityType === 'signup') {
      return 'Signup'
    } else {
      return 'Verify'
    }
  }


  ngOnDestroy() {

  }
}
