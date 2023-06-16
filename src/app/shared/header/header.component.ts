
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItems$?: Observable<number>; 
  constructor(private store:Store<{cart: { totalItems: any; }}>){
  }

  ngOnInit(): void {
    this.totalItems$ = this.store.select(state=> state.cart.totalItems);
  }

}
