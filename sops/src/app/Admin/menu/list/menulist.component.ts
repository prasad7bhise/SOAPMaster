import { Component, OnInit } from '@angular/core'
import {  MenuService  } from '../menu.service'
import {Router} from '@angular/router'

import * as toastr from 'toastr'

@Component({
    selector: 'app-menu-list',
    templateUrl: './menulist.component.html',
    styleUrls:['./menulist.component.css']
})

export class MenuListComponent implements OnInit {
    menulists = []
    email
    constructor(private menuService: MenuService, private router: Router) {
        this.getmenus()
        this.email = sessionStorage['email']

     }

    ngOnInit() { }

    onLogout(){
      sessionStorage.removeItem('login_status')
      sessionStorage.removeItem('email')
        this.router.navigate(['/admin-login'])
        toastr.success('Logged Out')

    }

    getmenus(){
        this.menuService.getmenus().subscribe(response=>{
            if(response['status']=='success'){
                this.menulists = response['data']
            }else{
                console.log(response['error'])
            }
        })

    }


    deletemenus(menu_id: number){
      this.menuService.deleteMenus(menu_id).subscribe(response=>{
          if(response['status']='success'){
          toastr.warning('Removed..')
          this.getmenus()
          }
          else{
              console.log(response['error'])
          }
      })
  }

  }
