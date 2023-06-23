import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService, private store:Store){}

  onSubmit(event:Event,form:HTMLFormElement) {
    event.preventDefault();
    
    const formData = new FormData(form)

    const username = formData.get('username')
    const password = formData.get('password')

    const credentials = {username:username, password:password} 
    
    this.auth.login(credentials).subscribe(
      response => {
        this.store.dispatch(login({data:response}))
      },
      error => {
        console.log('something went wrong')
        form.reset()
      }
    );

    
    
  }

}
