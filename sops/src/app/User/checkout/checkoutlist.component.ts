import { Component, OnInit } from '@angular/core'
import {UserCheckoutListService} from '../checkout/checkout.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'



@Component({
  selector: 'app-user-checkout',
  templateUrl: 'checkoutlist.component.html',
  styleUrls: ['checkoutlist.component.css']
})

export class UserCheckoutComponent implements OnInit {
  name
  id
  checkouts = []
  Gross_total

  constructor(private router: Router, private usercheckoutservice: UserCheckoutListService) {
    this.name = sessionStorage['name']
    this.id = sessionStorage['id']
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

    this.usercheckoutservice.getcheckoutlist(this.id).subscribe(response => {
      if(response['status']=='success'){
          this.checkouts = response['data']
          console.log(this.checkouts)
          this.Gross_total = 0


          }
      else{
          console.log(response['data'])
      }

  })

  }

  onPay(){

  }

  onClear(checkout_id: number){
    this.usercheckoutservice.deletecheckout(checkout_id).subscribe(response=>{
      if(response['status']='success'){
        toastr.warning('Removed..')
        this.getcheckoutlist()
        }
  else{
  console.log(response['error'])
      }
})

  }

}

