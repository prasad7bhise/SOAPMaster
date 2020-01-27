import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserCheckoutListService {

  url = 'http://localhost:4000/checkout'

  constructor(private http: HttpClient) { }

  getcheckoutlist(id: number){
    return this.http.get(this.url +'/'+ id)
  }

  deletecheckout(checkout_id: number){
    return this.http.delete(this.url+'/delete/'+ checkout_id)
  }

}
