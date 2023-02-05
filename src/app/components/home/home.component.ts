import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/login-services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLogged = false;

  
 
  constructor( private router:Router, private tokenService: TokenService){  }

  

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }
    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
    }
    
  
  irALogIn(){
    this.router.navigate(['login']);
  }

}
