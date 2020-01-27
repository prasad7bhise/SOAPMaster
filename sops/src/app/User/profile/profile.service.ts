import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'


@Injectable({providedIn: 'root'})
export class UserProfileService {
    url='http://localhost:4000/users'
    constructor(private http: HttpClient, private router: Router) { }


    getCustomerById(id: number){
        return this.http.get(this.url+'/'+ id)
    }

    updateProfile(id: number,name: String,email: String,phone: String,password: String){
        const body={
          name: name,
          email:email,
          phone: phone,
          password: password
        }
        return this.http.put(this.url+'/update/'+ id, body)
    }




}
