import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad:number=33;
  peso:number = 75;
  altura:number=170;
  sexo:string='masculino';

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any){
    this.altura = event.target.value;
  }

  masculino(){
  this.sexo = 'masculino'
  }

  femenino(){
    this.sexo = 'femenino'
  }

  calcularIMC(){
    //vamos hacer logica
  const IMC = this.peso / Math.pow(this.altura/100,2);
  this.router.navigate(['/resultado', IMC.toFixed(1)])
  }
}
