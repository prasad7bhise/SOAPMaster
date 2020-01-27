import { Component, OnInit } from '@angular/core'
import { UserListService } from './userlist.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'

@Component ({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserListComponent implements OnInit {
  users = []
  email
  constructor(private userService: UserListService, private router: Router) {
    this.email = sessionStorage['email']
    userService.getUser().subscribe((response=>{
      if(response['status']=='success'){
          this.users = response['data']
      }
      else{
          console.log(response['data'])
      }
  })
  )


}
onLogout(){
  sessionStorage.removeItem('login_status')
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('id')
  this.router.navigate(['/user-login'])
  toastr.success('Logged Out')

}

  ngOnInit() { }
}
