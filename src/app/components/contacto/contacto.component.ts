import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/login-services/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isLogged = false;

  idParaEdit:number;
  
  plataforma: string;
  link: string;

  contactos:Contacto[]=[]

  contact: Contacto = null;
  contactEdit: Contacto = null;

  constructor(public contactoService: ContactoService, private router:Router, private tokenService: TokenService){  }


  seleccionarContacto(id: number, plataforma:string,link:string){
    this.idParaEdit=id;
    this.plataforma=plataforma;
    this.link=link;
  }

  borrarContacto(id:number){
    if(id != undefined){
      this.contactoService.delete(id).subscribe(
        data=>{
          window.location.reload();
        }, err=> {
          alert("Falló");
        window.location.reload();
        }
      )
    }
  }

  editarContacto():void{
    const contactEdit = new Contacto(this.plataforma, this.link);
    this.contactoService.update(this.idParaEdit, contactEdit).subscribe(
      data => {
        window.location.reload();
      }, err=>{
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarContacto():void{
    const contact = new Contacto(this.plataforma, this.link)
this.contactoService.save(contact).subscribe(
  data=> {
    console.log("Contacto agregada");
    window.location.reload();
    
  }, err=>{
    alert("Falló");
    window.location.reload();
  }
  
)
  }
  
  cargarListaContactos(): void {
    this.contactoService.lista().subscribe(
      data => this.contactos = data
    )
  }

ngOnInit(): void {
  this.cargarListaContactos();
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
