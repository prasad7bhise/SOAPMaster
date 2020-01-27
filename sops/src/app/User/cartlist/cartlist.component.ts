import { Component, OnInit } from '@angular/core'
import {UserCartListService} from '../cartlist/cart.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'

@Component({
  selector: 'aap-cart-user',
  templateUrl: 'cartlist.component.html',
  styleUrls: ['cartlist.component.css']
})

export class CartComponent implements OnInit {
  carts = []
  name
  id
  Total_test
  cart_id
  menu_name
  menu_id
  price
  Grand_total
  cgst
  sgst
  constructor(private userCart: UserCartListService, private router: Router) {
    this.name = sessionStorage['name']
    this.id = sessionStorage['id']
    this.getCart()


   }

  ngOnInit() {

  }
  onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }

  getCart(){
    this.userCart.getCart(this.id).subscribe(response => {
      if(response['status']=='success'){
          this.carts = response['data']
          console.log(this.carts);
          this.Grand_total = 0
          for(let index = 0;index<this.carts.length; index++){
            this.Grand_total = this.Grand_total + this.carts[index]['price']
               this.cgst = 2.5 /100 *this.Grand_total
               this.sgst = 2.5 /100 *this.Grand_total
               this.Total_test = this.cgst + this.sgst +this.Grand_total

            // this.ProductService.addOrders(this.Orders['Userid'],this.Total_test)


            sessionStorage['Total']=this.Total_test
          }



      }
      else{
          console.log(response['data'])
      }
      console.log(this.Total_test)
  })

  }

  onAdd(id: number,menu_id: number ,menu_name: String, price: number)
  {
    this.userCart.addcartitem( id, menu_id,menu_name, price)
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('Product Added Succesfully!!')
                    window.location.reload();

                }
                else{
                    console.log(response['error'])
                }

        })
    }

      onSubstract(cart_id: number){
              this.userCart.deletecartitem(cart_id).subscribe(response=>{
              if(response['status']='success'){
                toastr.warning('Removed..')
                this.getCart()
                }
          else{
          console.log(response['error'])
              }
   })
}

onCheckout(){
  this.userCart
  .addcheckout(this.id,this.Total_test)
  .subscribe((response) => {
    if (response['status'] == 'success') {
      toastr.success('Category Added!!!')
      this.router.navigate(['user-checkout'])
    } else {
      console.log(response['error'])
    }
  })

}

  }


