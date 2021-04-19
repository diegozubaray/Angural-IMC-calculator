import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  imc:number;
  resultado:string;
  interpretacion:string;
  constructor(private route: ActivatedRoute) {

    this.resultado='';
    this.interpretacion='';
    this.imc = +route.snapshot.paramMap.get('valor')!
    console.log(this.imc)
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){

    if(this.imc <=18.5){
      this.resultado='Peso inferior al normal',
      this.interpretacion='Tenes que comer mas..'
    }else if(this.imc>=18.6 && this.imc<=24.9){
      this.resultado='peso Normal',
      this.interpretacion='Estas exelente.. sigue Asi!!'
    }else if(this.imc>=25 && this.imc<=29.9){
      this.resultado='Peso superior al normal',
      this.interpretacion='Ojo,trata de comer menos y hacer ejercicio..'
    }else{
      this.resultado='Obesidad',
      this.interpretacion='Deja de comer un poco y hace mas ejercicios..'
    }
  }

}
