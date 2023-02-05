import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/login-services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  isLogged = false;

  idParaEdit:number;

  titulo: string;
  institucion: string;
  periodo: string;

  estudios:Educacion[]=[]

  educ: Educacion = null;
  educEdit: Educacion = null;

  constructor(public educacionService: EducacionService, private router:Router, private tokenService: TokenService){  }


  seleccionarEducacion(id: number, titulo:string,institucion:string,periodo:string){
    this.idParaEdit=id;
    this.titulo=titulo;
    this.institucion=institucion;
    this.periodo=periodo;
  }

  borrarEducacion(id:number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data=>{
          window.location.reload();
        }, err=> {
          alert("Falló");
        window.location.reload();
        }
      )
    }
  }

  editarEducacion():void{
    const educEdit = new Educacion(this.titulo, this.institucion, this.periodo);
    this.educacionService.update(this.idParaEdit, educEdit).subscribe(
      data => {
        window.location.reload();
      }, err=>{
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarEducacion():void{
    const educ = new Educacion(this.titulo, this.institucion, this.periodo)
this.educacionService.save(educ).subscribe(
  data=> {
    console.log("Educacion agregada");
    window.location.reload();
    
  }, err=>{
    alert("Falló");
    window.location.reload();
  }
  
)
  }
  
  cargarListaEducacion(): void {
    this.educacionService.lista().subscribe(
      data => this.estudios = data
    )
  }

ngOnInit(): void {
  this.cargarListaEducacion();
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
