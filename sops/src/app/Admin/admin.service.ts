import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router'

@Injectable()
export class AdminService implements CanActivate{

url = 'http://localhost:4000/admin/login'

  constructor(
    private http: HttpClient,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(localStorage ['login_status'] == 1) {
      return true
    }

    this.router.navigate(['/admin-login'])
    return false

  }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }
    return this.http.post(this.url , body)
  }
}
