import { Component, OnInit } from '@angular/core'
import { AdminService } from '../admin.service'
import * as toastr from 'toastr'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class AdminLoginComponent implements OnInit {

  email = ''
  password = ''
  componentToLaunch = 'menu-list'
  rememberme = false

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

      console.log(activatedRoute.snapshot.queryParams)
      this.componentToLaunch = activatedRoute.snapshot.queryParamMap['screen']
     }

  ngOnInit() { }

  onLogin() {
    if (this.email.length == 0) {
      toastr.error('Enter valid email')
    } else if  (this.password.length == 0) {
      toastr.success('Enter valid password')
    } else {
      this.adminService
      .login(this.email, this.password)
      .subscribe(response => {

        if (response['status'] == 'success') {
          toastr.success('Authenticated')
          this.router.navigate(['/menu-list'])

          if (this.rememberme){

            //maintain login status
            sessionStorage['login_status']='1'
            sessionStorage['email']=response['data']['email']
            this.router.navigate(['/menu-list'])
          }
        }
        else{

            toastr.error(response ['error'])

        }
      })
    }
  }
}


