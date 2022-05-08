import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.onCloseSidenav.emit(true);
  }

}
