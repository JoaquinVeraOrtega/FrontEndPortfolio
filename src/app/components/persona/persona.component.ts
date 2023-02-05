import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.model';
import { TokenService } from 'src/app/services/login-services/token.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  isLogged = false;

  idParaEdit:number;
  
  nombre: string;
  acercaDe: string;
  titulo: string;

  personas:Persona[]=[]

  perso: Persona = null;
  persoEdit: Persona = null;

  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService){  }


  seleccionarPersona(id: number, nombre:string,acercaDe:string,titulo:string){
    this.idParaEdit=id;
    this.nombre=nombre;
    this.acercaDe=acercaDe;
    this.titulo=titulo;
  }

  borrarPersona(id:number){
    if(id != undefined){
      this.personaService.delete(id).subscribe(
        data=>{
          window.location.reload();
        }, err=> {
          alert("Falló");
        window.location.reload();
        }
      )
    }
  }

  editarPersona():void{
    const persoEdit = new Persona(this.nombre, this.acercaDe, this.titulo);
    this.personaService.update(this.idParaEdit, persoEdit).subscribe(
      data => {
        window.location.reload();
      }, err=>{
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarPersona():void{
    const perso = new Persona(this.nombre, this.acercaDe, this.titulo)
this.personaService.save(perso).subscribe(
  data=> {
    console.log("Persona agregada");
    window.location.reload();
    
  }, err=>{
    alert("Falló");
    window.location.reload();
  }
  
)
  }
  
  cargarListaPersonas(): void {
    this.personaService.lista().subscribe(
      data => this.personas = data
    )
  }

ngOnInit(): void {
  this.cargarListaPersonas();
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
