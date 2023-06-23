import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth:AuthService){}
  onSubmit(event: Event, form: HTMLFormElement) {
    event.preventDefault();

    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
  }

}
