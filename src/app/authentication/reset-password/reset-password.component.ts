import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractFormClass } from '../../core/classes';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent extends AbstractFormClass implements OnInit {

  form!: FormGroup<any>;
  isSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    super()
  }

  ngOnInit(): void {
    this.initForm()    
  }
  initForm(): void {
    this.form = this.formBuilder.group({
      email:     new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
    });
  }
 

  onSubmit(): void {
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
    this.router.navigateByUrl('/pages');
  }

}
