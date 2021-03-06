import { Component, OnInit } from '@angular/core'
import { CategoryService } from '../category.service'
import * as toastr from 'toastr'
import { Router } from '@angular/router'


@Component({
  selector: 'app-category-add',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']


})

export class CategoryAddComponent implements OnInit {

  categories = []
  category_name: string


  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService = categoryService
  }

  ngOnInit() { }

  addCategory() {
    this.categoryService
      .addCategory(this.category_name)
      .subscribe((response) => {
        if (response['status'] == 'success') {
          toastr.success('Category Added!!!')
          this.router.navigate(['/category-list'])
        } else {
          console.log(response['error'])
        }
      })

  }
}


