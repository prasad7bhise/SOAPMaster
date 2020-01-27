import { Component, OnInit } from '@angular/core'
import {TableService} from '../table.service'
import {Router} from '@angular/router'
import * as toastr from 'toastr'
@Component({
  selector: 'app-table list-',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})

export class TableViewComponent implements OnInit {
  tables = []
  email
  constructor(private tableService: TableService, private router: Router) {
    this.email = sessionStorage['email']
  }

  ngOnInit() {
    this.tableService.getTables().subscribe(response=>{
      if(response['status']=='success'){
          this.tables = response['data']
      }else{
          console.log(response['error'])
      }
  })
   }
   onOrder(){

   }
   onLogout(){
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
    this.router.navigate(['/user-login'])
    toastr.success('Logged Out')

  }
}
