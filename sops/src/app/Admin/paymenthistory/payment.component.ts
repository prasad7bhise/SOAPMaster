import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import * as toastr from 'toastr'
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment.component.html',
  styleUrls: ['payment.component.css']
})

export class PaymentListComponent implements OnInit {

  payments = []
  email

  constructor(private router: Router, private paymentListservice: AdminService) {
    this.email = sessionStorage['email']
     this.getpayment()
  }
  onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }

  ngOnInit() { }

  getpayment(){

    this.paymentListservice.getpayment().subscribe(response => {
      if(response['status']=='success'){
          this.payments = response['data']
          console.log(this.payments)


          }
      else{
          console.log(response['data'])
      }

  })

  }

}
