import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserBillingListService {

  url = 'http://localhost:4000/payment'

  constructor(private http: HttpClient) { }

  addpayment(id: number,Total_test: number,payment_mode: String){

    const body = {
      id: id,
      Total_test: Total_test,
      payment_mode: payment_mode

     }
     return this.http.post(this.url+'/pay' , body)

  }
  }

