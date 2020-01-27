import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import * as toastr from 'toastr'
import { AdminService } from '../../admin.service'

@Component({
  selector: 'app-order-list',
  templateUrl: './orderlist.component.html',
  styleUrls: ['orderlist.component.css']
})

export class OrderListComponent implements OnInit {

  checkouts = []
  email

  constructor(private router: Router, private orderListservice: AdminService) {
    this.email = sessionStorage['email']
    this.getcheckoutlist()

  }
  onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }

  ngOnInit() { }

  getcheckoutlist(){

    this.orderListservice.getcheckoutlist().subscribe(response => {
      if(response['status']=='success'){
          this.checkouts = response['data']
          console.log(this.checkouts)


          }
      else{
          console.log(response['data'])
      }

  })

  }

}
