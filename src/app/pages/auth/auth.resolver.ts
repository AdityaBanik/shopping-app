import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadUser } from "./auth.actions";



@Injectable()
export class AuthResolver implements Resolve<any>{

    constructor(private store:Store){
    }

    resolve() {

        const userData = localStorage.getItem('user')
        if (userData) {
            const authState = JSON.parse(userData);
            this.store.dispatch(loadUser({ user: authState }));
        }
        return null
    }
}