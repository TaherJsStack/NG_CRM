import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AbstractFormClass } from '../../core/classes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends AbstractFormClass {

  form!: FormGroup;
  isSubmit:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email:     new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
    this.router.navigateByUrl('/pages');
  }


}
