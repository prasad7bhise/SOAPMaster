import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UserProfileService } from '../profile.service'
import * as toastr from "toastr";


@Component({
    selector: 'user-profile-edit',
    templateUrl: './editprofile.component.html',
    styleUrls:['./editprofile.component.css']
})

export class ProfileEditComponent implements OnInit {
    id = 0
    name = ''
    email = ''
    phone = ''
    password = ''



    constructor(private router: Router,private profileService: UserProfileService) {
        this.id = sessionStorage['id']
        console.log(this.id)

        if(this.id){
            this.profileService.getCustomerById(this.id)
            .subscribe(response=>{
                if(response['status'] = 'success')
                {
                    const customers = response['data']
                    this.name = customers[0].name
                    this.email = customers[0].email
                    this.phone = customers[0].phone
                    this.password = customers[0].password


                }
            })
        }

     }

     onUpdateProfile(id: number){
         this.profileService.updateProfile(this.id,this.name,this.email,this.phone,this.password)
        . subscribe(response=>{
            if(response['status'] = 'success')
            {
                toastr.success('Profile updated successfully')
                this.router.navigate['/user-login']
            }
            else{
                toastr.error('error')

            }
        })
     }

    ngOnInit() { }
}
