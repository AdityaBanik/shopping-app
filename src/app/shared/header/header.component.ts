
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  totalItems$?: Observable<number>; 


  @Input() drawerRef?: MatDrawer

  constructor(private store:Store<{cart: { totalItems: number; }}>){
  }

  ngOnInit(): void {
    this.totalItems$ = this.store.select(state=> state.cart.totalItems);
  }

  toggleSideNav(){
    this.drawerRef?.toggle()
  }
}
