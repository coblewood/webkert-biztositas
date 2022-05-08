import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser?: firebase.default.User | null;

  constructor(
    private authService: AuthService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
    }, error => {
      console.error(error)
    });
    
  }

  logout(){
    this.authService.logout().then(() => {
      console.log('Logged out');
      this.router.navigateByUrl("/login");
    }).catch(error => {
      console.error(error);
    });
  }
}
