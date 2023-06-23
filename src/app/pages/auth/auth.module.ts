import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { AuthResolver } from './auth.resolver';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    StoreModule.forFeature('auth',  authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers:[AuthResolver]

})
export class AuthModule { }
