import { Component, OnInit } from '@angular/core'
import {UserService} from '../user.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'
@Component({
  selector: 'user-menu',
  templateUrl: './menuview.component.html',
  styleUrls: ['./menuview.component.css']
})

export class MenuUserComponent implements OnInit {
  menulist = []
  name
  menu_id = 0
  id = 0
  cart: any
  cart_id = 0
  menu_name = ""
  price = 0

  constructor(private userMenu: UserService, private router: Router) {
    this.name = sessionStorage['name']
    this.id = sessionStorage['id']
    this.getmenu()
  }



  ngOnInit() { }

  onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }

  getmenu(){
    this.userMenu.getmenu().subscribe(response=>{
        if(response['status']=='success'){
            this.menulist = response['data']
        }else{
            console.log(response['error'])
        }
    })
  }

  onAdd(menu_id,menu_name,price){
    this.userMenu.onAddToCart(this.id,menu_id,menu_name,price).subscribe(response=>{
     if(response['status']=='success'){
       this.cart = response['data']
       console.log('cart called')
       toastr.success('Item added to cart')

     }
     else{
       toastr.error('plz select ')
     }
   })

  }
}
