import { createReducer, on } from '@ngrx/store';
import { loadUser, login, logout } from './auth.actions';

export interface AuthState {
    user: any;
}

export const initialState: AuthState = {
    user: undefined
};

export const authReducer = createReducer(
    initialState,
    on(loadUser, (state, { user }) => {
        return { user: user }
    }),
    on(login, (state, { data }) => {
        return {
            ...state,
            user: data
        };
    }),

    on(logout, (state) => {
        return {
            ...state,
            user: undefined
        };
    })
);