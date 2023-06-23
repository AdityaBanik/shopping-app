import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoggedIn } from './pages/auth/auth.selectors';
import { Observable } from 'rxjs';
import { logout } from './pages/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit{
  title = 'shopping-app';
  loginStatus$?:Observable<boolean> 

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginStatus$ = this.store.select(isLoggedIn)
  }
  
  logout():void{
    this.store.dispatch(logout())
  }
  
}
