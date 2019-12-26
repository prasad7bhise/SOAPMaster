import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {

  url = 'http://localhost:4000/menu'

  constructor(private http: HttpClient) { }


addMenu(

  category_id: number,
    menu_name: string,
    price: number){


     const body = {
            category_id: category_id,
              menu_name: menu_name,
              price: price,
     };
     return this.http.post(this.url, body);
    }

  getmenus() {
    return this.http.get(this.url);
  }

  deleteMenus(menu_id:number){
    return this.http.delete(this.url+'/'+menu_id)
}


}
