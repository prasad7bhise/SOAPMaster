import { Component, OnInit } from '@angular/core'
import {CategoryService} from '../category.service'
import * as toastr from 'toastr'

@Component({
  selector: 'app-category-list',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})

export class CategoryListComponent implements OnInit {
  categories=[]
  constructor(private categoryservice: CategoryService) {

    this.getCategory()

  }

  ngOnInit() { }

  getCategory(){
    this.categoryservice.getCategory().subscribe(response=>{
      if(response['status']='success'){
        this.categories=response['data']
      }
      else{
        console.log(response['error'])
      }
    })
  }


  deleteCategory(category_id:number){
    this.categoryservice.deleteCategory(category_id).subscribe(response=>{
        if(response['status']='success'){
        toastr.warning('Removed..')
        this.getCategory()
        }
        else{
            console.log(response['error'])
        }
    })
}
}
