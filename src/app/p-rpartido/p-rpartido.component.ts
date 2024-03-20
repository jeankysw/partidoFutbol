import { Component, ViewChild, ElementRef } from '@angular/core';

import { HijopartidoComponent } from '../hijopartido/hijopartido.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-p-rpartido',
  standalone: true,
  imports: [HijopartidoComponent,FormsModule],
  templateUrl: './p-rpartido.component.html',
  styleUrl: './p-rpartido.component.css'
})
export class PRPartidoComponent  {
  
  // @ViewChild('container', {static: true}) container!: ElementRef  ;
  // animateContainer() {
  //   if (this.container) {
  //     const container = this.container.nativeElement;
  //     container.style.left = '50%';
  //     container.style.transition = 'left 2s ease-in-out';

  //     setTimeout(() => {
  //       container.style.left = '-100%';
  //     }, 2000);
  //   }
  // }
  equipo1=0
  equipo2=0                                
  nameequipo="TEAM1"
  nameequipo2="TEAM2"
  equipo11 = "TEAM1";
  equipo22 = "TEAM2";
  
  mostrarform=false 
  recibirDatosDelHijo(datos: any) {
    this.equipo1=datos.golesEquipo1
    this.equipo2=datos.golesEquipo2
  }                                                     
  enviarr(){
    this.equipo11 = this.nameequipo;
    this.equipo22 = this.nameequipo2
    this.mostrarform=false 
  }
  ocultarform(){
    this.mostrarform=false 
  }
  mostraform(){
    this.mostrarform=true
  }
 botonActivo: boolean = false;
  tiempoo=1;
  personalisado=""
  segundos:any = "00";
  segundosantescomenzar: number = 6;
  estadisticas=0
  mensaje=false
  equipoganador=""
  intervalId: any;
  mensajeTiempo:any
  btnanotar=true
  mostrarconteen=false
  mostrarconteen2=false
  tiempofinal=false
  mostrarganador=false
  mostrarempate=false
  aceptar(){
    window.location.reload();
  }
  enviar(){
    
  }

  iniciarCronometro() { 
    this.intervalId = setInterval(() => {
      this.mostrarconteen=true
      this.segundosantescomenzar--
      if (this.tiempoo===0){
        this.tiempoo=1
      }
      if(this.segundosantescomenzar===0){
        this.tiempoo--;
        this.segundos= 59;
        clearInterval(this.intervalId);
          this.intervalId = setInterval(() => {
          this.botonActivo=true
          this.btnanotar=false
          this.segundos--
          if(this.segundos<10){
            this.segundos="0"+this.segundos--  
          }
          
        setTimeout(() => {
          if (this.segundos === "0"+0) {
            if (this.tiempoo > 0) {
              this.tiempoo--;
              this.segundos = 59;
            }
          
            else{
              clearInterval(this.intervalId);
              this.botonActivo= false;
              this.btnanotar=true
            }
          
          } 
          else {
            if(this.tiempoo==0 && this.segundos==="0"+5){ 
              this.mensaje=true
              this.tiempofinal=true
              this.mostrarconteen2=true
            }
              
          }
          if(this.tiempoo==0 && this.segundos==="0"+0){
              this.mensaje=false
              this. tiempofinal=false
              this.mostrarganador=true
              clearInterval(this.intervalId);
              if (this.equipo1>this.equipo2){
                this.equipoganador= this.nameequipo
              }
              if (this.equipo1==this.equipo2){
                this.mostrarganador=false
                this.mostrarempate=true
                this.equipoganador="Empate"
              }
              if(this.equipo2>this.equipo1){
                this.equipoganador= this.nameequipo2
              }
              
          }
        }, 5000); 
      }, 1000); }
        this.mensajeTiempo=this.segundosantescomenzar
        if(this.mensajeTiempo==0){
          this.mostrarconteen=false
          this.mostrarconteen2=true
        }
    }, 1000);
      
  }
}

