import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosCardComponent } from './components/proyectos-card/proyectos-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleSeparatorComponent } from './components/VisualComponents/title-separator-der/title-separator.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillCircleProgressBarComponent } from './components/skill-circle-progress-bar/skill-circle-progress-bar.component';
import { TitleSeparatorIzqComponent } from './components/VisualComponents/title-separator-izq/title-separator-izq.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ProyectosCardComponent,
    TitleSeparatorComponent,
    SkillCircleProgressBarComponent,
    TitleSeparatorIzqComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
