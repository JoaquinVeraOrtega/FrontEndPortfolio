import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { TokenService } from 'src/app/services/login-services/token.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  isLogged = false;

  idParaEdit:number;
  
  nombre: string;
  porcentaje: number;

  skills:Skill[]=[]

  skill: Skill = null;
  skillEdit: Skill = null;

  constructor(public skillService: SkillService, private router:Router, private tokenService: TokenService){  }


  seleccionarSkill(id: number, nombre:string,porcentaje:number){
    this.idParaEdit=id;
    this.nombre=nombre;
    this.porcentaje=porcentaje;
  }

  borrarSkill(id:number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data=>{
          window.location.reload();
        }, err=> {
          alert("Falló");
        window.location.reload();
        }
      )
    }
  }

  editarSkill():void{
    const skillEdit = new Skill(this.nombre, this.porcentaje);
    this.skillService.update(this.idParaEdit, skillEdit).subscribe(
      data => {
        window.location.reload();
      }, err=>{
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarSkill():void{
    const skill = new Skill(this.nombre, this.porcentaje)
this.skillService.save(skill).subscribe(
  data=> {
    console.log("Skill agregada");
    window.location.reload();
    
  }, err=>{
    alert("Falló");
    window.location.reload();
  }
  
)
  }
  
  cargarListaSkills(): void {
    this.skillService.lista().subscribe(
      data => this.skills = data
    )
  }

ngOnInit(): void {
  this.cargarListaSkills();
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
