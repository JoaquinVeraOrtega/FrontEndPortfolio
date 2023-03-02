import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { TokenService } from 'src/app/services/login-services/token.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  isLogged = false;

  idParaEdit: number;

  nombre: string;
  cliente: string;
  link: string;

  proyectos: Proyecto[] = []

  proyect: Proyecto = null;
  proyectEdit: Proyecto = null;

  constructor(public proyectoService: ProyectoService, private router: Router, private tokenService: TokenService) { }

  seleccionarProyecto(id: number, nombre: string, cliente: string, link: string) {
    this.idParaEdit = id;
    this.nombre = nombre;
    this.cliente = cliente;
    this.link = link;
  }

  borrarProyecto(id: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        data => {
          window.location.reload();
        }, err => {
          alert("Falló");
          window.location.reload();
        }
      )
    }
  }

  editarProyecto(): void {
    const proyectEdit = new Proyecto(this.nombre, this.cliente, this.link);
    this.proyectoService.update(this.idParaEdit, proyectEdit).subscribe(
      data => {
        window.location.reload();
      }, err => {
        alert("Falló");
        window.location.reload();
      }
    )
  }

  agregarProyecto(): void {
    const proyect = new Proyecto(this.nombre, this.cliente, this.link)
    this.proyectoService.save(proyect).subscribe(
      data => {
        console.log("Proyecto agregado");
        window.location.reload();

      }, err => {
        alert("Falló");
        window.location.reload();
      }

    )
  }

  cargarListaProyectos(): void {
    this.proyectoService.lista().subscribe(
      data => this.proyectos = data
    )
  }

  ngOnInit(): void {
    AOS.init();
    this.cargarListaProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  irALogIn() {
    this.router.navigate(['login']);
  }

}
