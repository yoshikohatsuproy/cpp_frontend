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

  displayedColumns: string[] = ['codigo', 'codigo_sunat', 'descripcion', 'activo', 'acciones'];
  dataSource = new MatTableDataSource<Pago>(this.pagos);

  @ViewChild(MatPaginator) paginator! : MatPaginator;



  ngOnInit(): void {
    this.cargarData();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  cargarData(){
    this.pagosService.getPagos()
    .subscribe( resp =>{
         this.pagos = resp;
         this.dataSource = new MatTableDataSource(this.pagos);
    });
  }


}
