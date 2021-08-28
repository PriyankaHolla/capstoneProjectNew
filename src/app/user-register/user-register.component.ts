import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

 

  user:User = new User();

  submitted = false;
 

  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
 
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data:any)=>console.log(data));
      }
   
      onSubmit() {
        this.submitted = true;
        this.service.doRegistration(this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.service.setpan(this.user.pancardno);
        this.user = new User();
        this.router.navigate(['account']);
    
       
      }

}
