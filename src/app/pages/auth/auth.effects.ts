import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { Store } from "@ngrx/store";
import { login, logout } from "./auth.actions";
import { Router } from "@angular/router";



@Injectable()
export class AuthEffects {

    logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.data))
                this.router.navigateByUrl('/')
            })
        ),
        { dispatch: false })

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            tap(action => {
                localStorage.removeItem('user')
                this.router.navigateByUrl('/')
            })

        )
        ,
        { dispatch: false })




    constructor(private actions$: Actions, private store: Store, private router: Router) {
    }

}