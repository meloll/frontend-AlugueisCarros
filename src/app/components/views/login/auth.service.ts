import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getNav, setNav } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authError:any;

  constructor(private snackBar: MatSnackBar,public firebaseAuth:AngularFireAuth,private router: Router) { }

  loginWithEmail(email:string,senha:string){
    let thisService = this;
    thisService.authError=null;
    this.firebaseAuth.signInWithEmailAndPassword(email,senha).then(
      value =>{
        this.navigateToHome();
        this.snackBar.open("Login efetuado com sucesso",'X',{
          duration: 10000,
          horizontalPosition:"center",
          verticalPosition: "top"
          
        })
      }
    ).catch((error)=>{
      console.log(error.message)
      this.snackBar.open("Login invalido, tente novamente",'X',{
        duration: 5000,
        horizontalPosition:"center",
        verticalPosition: "top"
        
      })

      thisService.authError = error;
    })
  }

  navigateToHome():void{
    setNav(true)
    let nav=getNav();
    this.router.navigate(['home'])
    console.log(nav);
  }
}
