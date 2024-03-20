import { Component, Input ,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijopartido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijopartido.component.html',
  styleUrl: './hijopartido.component.css'
})
export class HijopartidoComponent {
  
  @Input() nombreequipo1?:String;
  @Input() nombreequipo2?:String;
  @Input() mensajetiempo?:any;
  @Input() estadisticas?:any;
  @Input() estadisticas2?:any;
  @Input() btnanotardesactivar?:Boolean;
  golequipo1:any=0
  golequipo2:any=0
  marcadoreqipo1="Empate"
  marcadoreqipo2="Empate"
  imagen="../../assets/equipos/arsenal.png"
  imagen2=".../../assets/equipos/liverpool.png"
  array:any=[]
  @Output() enviarDatosAlPadre = new EventEmitter<any>();
  arrayimagenequipos=[
  {imagen:"../../assets/equipos/arsenal.png",name:"Arsenal"},
  {imagen:"../../assets/equipos/atleticodemadirid.png",name:"Atletico de madrid"},
  {imagen:"../../assets/equipos/barcelona.png",name:"Barcelona"},
  {imagen:"../../assets/equipos/liverpool.png",name:"Liverpool"},
  {imagen:"../../assets/equipos/masnchester.png",name:"Manchster United"},
  {imagen:"../../assets/equipos/realmadrid.png",name:"Real Madrid"}]
  jugadoresEquipo1 = ["Messi", "Cristiano", "Neymar", "Xavi","Griezmann", "Modric", "Sterling", "Iniesta", "Pique","Ramos", "Aguero", "Neuer"]
  jugadoresequipo2 = ["Luis Suarez", "Mbappé", "Lewandowski", "Salah", "De Bruyne", "Kane", "Hazard", "Kroos", "Lukaku", "Alisson", "Kimmich", "Firmino"];
  oculttar=false
  oculttar2=false
  mostrarimgg(){
    this.oculttar=true
  }
  mostrarimgg2(){
    this.oculttar2=true
  }
  cambiarimg(index:any){
    this.imagen=index
    this.oculttar=false
  }
  cambiarimg2(index:any){
    this.imagen2=index
    this.oculttar2=false
  }
  anotargol1(){
    this.golequipo1++ 
    alert(this.estadisticas)
    if(this.golequipo1>this.golequipo2){
      this.marcadoreqipo1="Ganando"
      this.marcadoreqipo2="Perdiendo"
    }
    else if(this.golequipo1==this.golequipo2){
      this.marcadoreqipo1="Empate"
      this.marcadoreqipo2="Empate"
    }
    else{
      this.marcadoreqipo1=" Perdiendo"
      this.marcadoreqipo2=" Ganando"
    }
     this.array = {
      golesEquipo1: this.golequipo1,
      golesEquipo2: this.golequipo2,
    };
    this.enviarDatosAlPadre.emit(this.array);
  }
 
  namejugador=""
  namejugadorgol:any=[]
  anotargol2(){
    this.namejugadorgol.push([this.namejugador +" "+this.estadisticas2+":" +this.estadisticas]) 
    alert(this.namejugadorgol)
    this.golequipo2++ 
    if(this.golequipo1>this.golequipo2){
      this.marcadoreqipo1=" Ganando"
      this.marcadoreqipo2="Perdiendo"
    }
    else if(this.golequipo1==this.golequipo2){
      this.marcadoreqipo1="Empate"
      this.marcadoreqipo2="Empate"
    }
    else{
      this.marcadoreqipo1="Perdiendo"
      this.marcadoreqipo2="Ganando"
    }
    this.array = {
      golesEquipo1: this.golequipo1,
      golesEquipo2: this.golequipo2,
    };
    this.enviarDatosAlPadre.emit(this.array);
  }
  

}
