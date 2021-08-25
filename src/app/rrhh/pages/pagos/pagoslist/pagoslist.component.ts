import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pago } from 'src/app/interfaces/pago';
import { PagosService } from '../../services/pagos.service';





@Component({
  selector: 'app-pagoslist',
  templateUrl: './pagoslist.component.html',
  styles: [`
    .tabla{
      width:90%;
      margin: auto;
    }
    th{
      width: 18%;
    }
    .pointer{
      cursor: pointer;
      margin: 10px;
    }
  `
  ]
})
export class PagoslistComponent implements OnInit {




  constructor(private pagosService : PagosService) { }
  pagos : Pago[] = [];
  paginas : any = [];
  largo : number = 0;


  ngOnInit(): void {
    this.cargarData(1);
  }

  primeraPagina(){
    this.cargarData(1);
  }

  ultimaPagina(){
    this.cargarData(this.largo);
  }

  cambiarPagina(pagina : number) : void {
    this.cargarData(pagina);
  }

  cargarData(pagina: number){
    this.pagosService.getPagos()
    .subscribe( resp =>{
        let valorInicial = (pagina - 1) * 5;
        let valorFinal = pagina * 5;

        this.largo = resp.length;

        if (this.largo % 5 == 0){
          this.largo = this.largo / 5;
        }else{
          this.largo = Math.trunc(this.largo / 5) + 1;
        }

        resp = resp.filter((p,index) =>
          ((index < valorFinal) &&  (index  >= valorInicial))
        );

        this.pagos = resp;

        for(let i = 0 ; i < this.largo ; i++){
          this.paginas[i] = i + 1;
        }


    });
  }


}
