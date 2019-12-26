import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import * as toastr from 'toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class AdminLoginComponent implements OnInit {

  email = '';
  password = '';
  componentToLaunch = 'menu-list';

  constructor(
    private adminService: AdminService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) {

      console.log(ActivatedRoute.snapshot.queryParams)
      this.componentToLaunch = ActivatedRoute.snapshot.queryParamMap['screen']
     }

  ngOnInit() { }

  onLogin() {
    if (this.email.length == 0) {
      toastr.error('Enter valid email');
    } else if  (this.password.length == 0) {
      toastr.success('Enter valid password');
    } else {
      this.adminService
      .login(this.email, this.password)
      .subscribe(response => {

        if (response['status'] == 'success') {
          toastr.success('Authenticated');
          //maintain login status
          localStorage['login_status'] = '1'
          localStorage['email'] = response ['data']['email']

          //redirect to main component
          if(this.componentToLaunch && this.componentToLaunch.length >0 )
          this.router.navigate(['/movie-list' + this.componentToLaunch])
          this.router.navigate(['/menu-list' + this.componentToLaunch])
          this.router.navigate(['/menu-list'])
       }else {
          toastr.error(response ['error']);

        }
      });
    }
  }
}

