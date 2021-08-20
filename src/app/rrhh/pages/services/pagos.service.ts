import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs';
import { Pago } from 'src/app/interfaces/pago';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private url = environment.url;
  private modulo = 'pagos/'
  //getAll

  constructor(private http:HttpClient) { }



  getPagos(): Observable<Pago[]>{
    return this.http.get<Pago[]>(`${this.url}${this.modulo}getAll`);
  }

  getPagosById(){
    return this.http.get('');
  }

}
