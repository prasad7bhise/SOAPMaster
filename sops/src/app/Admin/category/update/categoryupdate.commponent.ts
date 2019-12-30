import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import {CategoryService} from '../category.service'
import * as toastr from 'toastr'

@Component({
  selector: 'app-category-update',
  templateUrl: './categoryupdate.commponent.html',
  styleUrls: ['./categoryupdate.commponent.css']
})

export class CategoryUpdateComponent implements OnInit {
  category_name: ''
  category_id: number
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private categoryService:CategoryService) { //private??
      const category_id=this.activatedRoute.snapshot.params['category_id']
      categoryService.getCategoryById(category_id).subscribe(response=>{
          if(response['status'] = 'success')
          {
              const categories = response['data']
              console.log(categories);
              this.category_id = category_id
              this.category_name = categories.category_name
              //console.log('this.vendor_name')

          }
      })
  }

  ngOnInit() { }
  updateCategory(category_id:number){
      this.categoryService.updateCategory(this.category_id,this.category_name).subscribe(response=>{
          if(response['status'] = 'success')
          {
              toastr.success('Information Updated')
              this.router.navigate['/category-list']
          }
          else{
              toastr.error('error')
          }
      })

  }
}
