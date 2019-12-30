import { Component } from '@angular/core'
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = ''
  title = 'sops'
  constructor(private router: Router) {
    this.email = localStorage['email']

  }

  onLogout() {
  localStorage.removeItem('login_status')
  localStorage.removeItem('email')
  this.router.navigate(['/admin-login'])

  }
}
