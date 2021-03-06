import { Component, OnInit } from '@angular/core'
import {UserService} from '../user.service'
import * as toastr from 'toastr'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: ''
  email: ''
  phone: ''
  password: ''



  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() { }

  onRegister(){
    if(this.name.length == 0){
      toastr.warning("Please Enter Valid Username")
    }else if(this.email.length == 0){
        toastr.warning('Plese Enter valid email ')
      }else if(this.password.length == 0){
        toastr.warning('Plese Enter valid email ')
      }else {
        this.userService.registerUser(this.name, this.email, this.phone, this.password)
        .subscribe(response=>{
          if(response['status']=='success'){
            toastr.success('user Registered successfully!!')
            this.router.navigate['/user-login']
          } else{
            toastr.warning(response['error'])
          }
        })
      }
    }

  }

