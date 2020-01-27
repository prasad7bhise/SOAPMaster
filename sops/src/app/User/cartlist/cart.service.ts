import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserCartListService {

  url = 'http://localhost:4000/cart'

  constructor(private http: HttpClient) { }


  getCart(id: number){
    return this.http.get(this.url +'/'+ id)
  }

  deletecartitem(cart_id: number){
    return this.http.delete(this.url+'/delete/'+ cart_id)
  }
  addcartitem(id: number,menu_id: number,menu_name: String,price: number){


       const body = {
        id:id,
        menu_id:menu_id,
        menu_name: menu_name,
        price: price
       }
       return this.http.post(this.url+'/add' , body)

}
addcheckout(id: number,Total_test: number){

  const body = {
    id:id,
    Total_test:Total_test

   }
   return this.http.post(this.url+'/check' , body)

}
}
