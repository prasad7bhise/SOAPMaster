import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class TableService {

  url = 'http://localhost:4000/table'

  constructor(private http: HttpClient) { }

  getTables(){

      return this.http.get(this.url)
  }

}
