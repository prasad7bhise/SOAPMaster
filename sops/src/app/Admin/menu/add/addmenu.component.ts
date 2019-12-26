import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr';
import { CategoryService } from '../../category/category.service';
import { MenuService } from '../../menu/menu.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-menu-add',
    templateUrl: './addmenu.component.html',
    styleUrls: ['addmenu.component.css']
})

export class MenuAddComponent implements OnInit {
  categories = [];
  menulists = [];

  category_id: number
   menu_name:''
   price: number

    constructor(private menuService: MenuService, private categoryService: CategoryService, private router: Router) {
            this.categoryService
            .getCategory().subscribe(response => {
                if(response['status']=='success'){
                    this.categories = response['data']
                    this.category_id = this.categories[0].id;
                }
          else {
                    console.log(response['error'])
                }
            })

          }




    ngOnInit() { }

    onAddMenu(){

        this.menuService.addMenu(this.category_id, this.menu_name, this.price)
            .subscribe(response=>{
                if(response['status'] == 'success'){
                    toastr.success('Product Added Succesfully!!')
                    this.router.navigate(['menu-list'])

                }
                else{
                    console.log(response['error'])
                }

        })
    }
}
