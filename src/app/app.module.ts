import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PersonaComponent } from './components/persona/persona.component';
import { interceptorProvider } from './services/login-services/interceptor.service';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'login', component:LogInComponent}
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    PersonaComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
