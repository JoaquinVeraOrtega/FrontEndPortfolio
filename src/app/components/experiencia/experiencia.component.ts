import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/login-services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  isLogged = false;

  idParaEdit:number;
  
  puesto: string;
  descripcion: string;
  empresa: string;

  experiencias:Experiencia[]=[]

  expe: Experiencia = null;
  expeEdit: Experiencia = null;

  constructor(public experienciaService: ExperienciaService, private router:Router, private tokenService: TokenService){  }


  seleccionarExperiencia(id: number, puesto:string,descripcion:string,empresa:string){
    this.idParaEdit=id;
    this.puesto=puesto;
    this.descripcion=descripcion;
    this.empresa=empresa;
  }

  borrarExperiencia(id:number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data=>{
          window.location.reload();
        }, err=> {
          alert("Falló");
        window.location.reload();
        }
      )
    }
  }

  editarExperiencia():void{
    const expeEdit = new Experiencia(this.puesto, this.descripcion, this.empresa);
    this.experienciaService.update(this.idParaEdit, expeEdit).subscribe(
      data => {
        window.location.reload();
      }, err=>{
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarExperiencia():void{
    const expe = new Experiencia(this.puesto, this.descripcion, this.empresa)
this.experienciaService.save(expe).subscribe(
  data=> {
    console.log("Persona agregada");
    window.location.reload();
    
  }, err=>{
    alert("Falló");
    window.location.reload();
  }
  
)
  }
  
  cargarListaExperiencias(): void {
    this.experienciaService.lista().subscribe(
      data => this.experiencias = data
    )
  }

ngOnInit(): void {
  this.cargarListaExperiencias();
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
