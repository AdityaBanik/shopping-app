import { Injectable } from "@angular/core";
import { CanActivate, Router, } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { isLoggedIn } from "../auth.selectors";


@Injectable()
export class AuthGaurd implements CanActivate {
    constructor(private store: Store, private router: Router) { }
    canActivate(): Observable<boolean> {
        return this.store.select(isLoggedIn).pipe(
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/accounts/login')
                }
            })
        )

    }
}