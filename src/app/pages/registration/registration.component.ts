import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  })


  createForm(model: User){
    let formGroup = this.formBuilder.group(model);
    formGroup.get('name')?.addValidators([Validators.required]);
    formGroup.get('email')?.addValidators([Validators.required]);
    formGroup.get('password')?.addValidators([Validators.required, Validators.minLength(8)]);
    formGroup.get('rePassword')?.addValidators([Validators.required, Validators.minLength(8)]);
    return formGroup;
  }

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.authService.registration(this.userForm.get('email')?.value, this.userForm.get('password')?.value).then(cred => {
      const user: User = {
        id: cred.user?.uid as string,
        name: this.userForm.get('name')?.value,
        email: this.userForm.get('email')?.value,
        package: ''
      }
      console.log(cred);
      this.userService.create(user).then(_ => {
        this.router.navigateByUrl('/');
        console.log('User added');
      }).catch(error => {
        console.error(error)
      })
    }).catch(error => {
      console.error(error)
    });
  }

  goBack(){
    this.location.back();
  }

}
