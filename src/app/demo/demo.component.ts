import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


 
submitted = false;
fetchedUser: User;
pan:string;
pin:number;
confirmpin:number;
constructor(private service :UserServiceService, private router:Router) { }

ngOnInit(): void {
  
}
timeoutfunc1()
{
  
  this.service.updateaccount(this.fetchedUser.id,this.fetchedUser)
  .subscribe(data => console.log(data), error => console.log(error));
  this.pin=0;


  // this.router.navigate(['register']);
}
timeoutfunc()
{
  if(this.pin==this.confirmpin)
  {
    this.fetchedUser.pin=this.pin;

          console.log(this.fetchedUser.id);

          setTimeout(() =>{
            this.timeoutfunc1();
        }, 1000);
  }
else{
  alert("Enter pin correctly")
}
 
}
onSubmit() {
  this.submitted = true;
  this. pan= this.service.getpan();
  this.service.list().subscribe(res=>{
       console.log(res);
       res.forEach(user => {
      
          if(user.pancardno==this.pan){
            this.fetchedUser=user;
           
     console.log(this.fetchedUser);
 
          }
          
      
       
      })
      
    })
    setTimeout(() =>{
      this.timeoutfunc();
  }, 100);
  

  }
  }