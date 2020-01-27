import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserListService {

  url = 'http://localhost:4000/admin'

  constructor(private http: HttpClient) { }


  getUser(){
    return this.http.get(this.url)
  }

}





