import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private as: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';

  async login() {
    try {
      let response:any = await this.as.loginWithUsernameAndPassword(
        this.username,
        this.password
      );
      console.log(response);
      //Todo: Redirect
      localStorage.setItem('token', response.token)
      this.router.navigateByUrl('/todos');
    } catch (e) {
      //Show error message
      alert('Login fehlgeschlagen!');
      console.error(e);
    }
  }
}
