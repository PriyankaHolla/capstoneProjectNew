import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

 
  // ngAfterViewInit(){
  //     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='rgb(139, 94, 180)';
  //   }
}
