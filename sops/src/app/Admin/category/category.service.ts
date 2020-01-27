import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  url = 'http://localhost:4000/category'

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.url);
  }

  addCategory(category_name: string) {
    console.log(category_name);
    const body = {
      category_name:category_name
    }

    return this.http.post(this.url + '/add-category', body);
  }

  deleteCategory(category_id:number){
    return this.http.delete(this.url+'/'+category_id)
}


updateCategory(category_id:number,category_name:string){
  const body={
      category_name:category_name
  }
  return this.http.put(this.url+'/update/'+category_id,body)
}

getCategoryById(id: number){
  return this.http.get(this.url)
}

}



