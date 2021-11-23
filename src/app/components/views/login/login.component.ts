import { getNav, setNav } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  senha:any;
  hide = true;

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.loginWithEmail(this.email,this.senha)
    console.log("meu login")
    console.log(this.email , "login")
    console.log(this.senha , "senha")

  }

  navigateToHome():void{
    setNav(true)
    let nav=getNav();
    this.router.navigate(['home'])
    console.log(nav);
  }



}
