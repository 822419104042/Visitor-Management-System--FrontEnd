import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public LoginForm: FormGroup;
  constructor(private router: Router, private restService: RestService) {}
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get valid() {
    return this.LoginForm.controls;
  }

  get errors() {
    return this.LoginForm.controls;
  }
  public onLoginClick() {
    this.restService
      .postModel(this.LoginForm.value, `/user/login`)
      .subscribe((res) => {
        console.log(res);
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['./dashboard']);
          console.log(res);
        } else {
          alert('Invalid User Details');
          this.router.navigate(['./Unauthorized']);
        }
      });
  }

  // public onLoginClick() {
  //   this.restService
  //     .postModel(this.LoginForm.value, `/user/login`)
  //     .subscribe((res) => {
  //       console.log(res);
  //       if (res == 1) {
  //         this.router.navigate(['./dashboard']);
  //       } else {
  //         alert('Invalid User Details');
  //       }
  //     });
  // }

 
}
