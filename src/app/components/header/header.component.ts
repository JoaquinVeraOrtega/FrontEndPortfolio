import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/login-services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isLogged = false;

  idParaEdit: number;

  email: string;
  github: string;
  linkedin: string;

  contactos: Contacto[] = []

  contactEdit: Contacto = null;

  constructor(public contactoService: ContactoService, private router: Router, private tokenService: TokenService) { }


  seleccionarContacto(id: number, email: string, github: string, linkedin: string) {
    this.idParaEdit = id;
    this.email = email;
    this.github = github;
    this.linkedin = linkedin;
  }

  editarContacto(): void {
    const contactEdit = new Contacto(this.email, this.github, this.linkedin);
    this.contactoService.update(this.idParaEdit, contactEdit).subscribe(
      data => {
        window.location.reload();
      }, err => {
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
