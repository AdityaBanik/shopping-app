import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const loadUser = createAction('[Sidebar] Load User', props<{ user: AuthState }>());

export const login = createAction('[Login] Login', props<{data:any}>());

export const logout = createAction('[Sidebar] Logout');
