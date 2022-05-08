import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription
  loadingObservation?: Observable<boolean>

  constructor(
    private router: Router,
    private authService: AuthService
   ) { }

  ngOnInit(): void {
  }

  async login() {
      this.authService.login(this.email.value, this.password.value).then(cred => {
        this.router.navigateByUrl('/');
        console.log(cred);
      }).catch(error => {
        console.error(error)
      });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
