import { Component, OnInit } from '@angular/core'
import {UserCheckoutListService} from '../checkout/checkout.service'
import {UserBillingListService} from '../Billing/billinglist.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'


@Component({
  selector: 'app-billing-user',
  templateUrl: 'billing.component.html',
  styleUrls: ['billing.component.css']
})

export class BillingListComponent implements OnInit {
  checkouts = []
  id
  name
  payment_mode

  constructor(private router: Router, private userCheService: UserCheckoutListService, private userbiService: UserBillingListService) {
    this.name = sessionStorage['name']
    this.id = sessionStorage['id']
    this.getcheckoutlist()
   }

  ngOnInit() { }

  onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }

  getcheckoutlist(){

    this.userCheService.getcheckoutlist(this.id).subscribe(response => {
      if(response['status']=='success'){
          this.checkouts = response['data']
          console.log(this.checkouts)
          }
      else{
          console.log(response['data'])
      }

  })

  }

  onCash(id: number,Total_test: number){
    this.userbiService.addpayment( id, Total_test, this.payment_mode = "cash")
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('payment Added Succesfully!!')
                    toastr.warning('Thanks for the visit...')
                }
                else{
                    console.log(response['payment failed'])
                }

        })

  }
  onUPI(id: number,Total_test: number){
    this.userbiService.addpayment( id, Total_test, this.payment_mode = "cards")
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('payment Added Succesfully!!')
                    toastr.warning('Thanks for the visit...')


                }
                else{
                    console.log(response['payment failed'])
                }

        })

  }
  onCards(id: number,Total_test: number){
    this.userbiService.addpayment( id, Total_test, this.payment_mode = "upi")
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('payment Added Succesfully!!')
                    toastr.warning('Thanks for the visit...')


                }
                else{
                    console.log(response['payment failed'])
                }

        })

  }
  onWallets(id: number,Total_test: number){
    this.userbiService.addpayment( id, Total_test, this.payment_mode = "mobile wallets")
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('payment Added Succesfully!!')
                    toastr.warning('Thanks for the visit...')


                }
                else{
                    console.log(response['payment failed'])
                }

        })

  }


}
