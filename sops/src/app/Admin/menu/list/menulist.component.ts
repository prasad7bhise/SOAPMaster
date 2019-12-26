import { Component, OnInit } from '@angular/core';
import {  MenuService  } from '../menu.service';

import * as toastr from 'toastr';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menulist.component.html',
    styleUrls:['./menulist.component.css']
})

export class MenuListComponent implements OnInit {
    menulists = []
    constructor(private menuService: MenuService) {
        this.getmenus()

     }

    ngOnInit() { }

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
