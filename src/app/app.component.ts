import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'biztsoitas-beadando';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
      console.log(user);
    }, error => {
      console.error(error);
    });
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if (event === true){
      sidenav.close();
    }
  }
}
