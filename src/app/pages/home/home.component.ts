import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Biztositas } from 'src/app/shared/models/Biztositas';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  csomagForm = new FormGroup({
    name: new FormControl(''),
  })

  orderForm = new FormGroup({
    name: new FormControl(''),
  })
  
  loggedInUser?: firebase.default.User | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) { }

  
  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
      console.log(user);
    }, error => {
      console.error(error);
    });
  }

  addCsomag(){
    
  }

  listUsers(){

  }

}
