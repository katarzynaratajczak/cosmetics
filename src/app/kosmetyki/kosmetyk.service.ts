import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KosmetykAttrs, Kosmetyk } from './kosmetyk';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KosmetykService {

  constructor(private httpClient: HttpClient) { }

  getKosmetyki(): Observable<Kosmetyk[]> {
    return this.httpClient.get<Kosmetyk[]>(`${environment.apiUrl}/kosmetyki`);
  }
  saveKosmetyk(kosmetykAttrs: KosmetykAttrs): Observable<Kosmetyk> {
    if (kosmetykAttrs.id) {
      return this.updateKosmetyk(kosmetykAttrs);
    } else {
      return this.createKosmetyk(kosmetykAttrs);
    }
  }
  private updateKosmetyk(data: KosmetykAttrs): Observable<Kosmetyk> {
    return this.httpClient.put(`${environment.apiUrl}/kosmetyki/${data.id}`, data).pipe(
      map((kosmetykAttrs) => new Kosmetyk(kosmetykAttrs))
    );
  }

  private createKosmetyk(data: KosmetykAttrs): Observable<Kosmetyk> {
    return this.httpClient.post(`${environment.apiUrl}/kosmetyki`, data).pipe(
      map((kosmetykAttrs) => new Kosmetyk(kosmetykAttrs))
    );
  }

  deleteCar(data: KosmetykAttrs): Observable<Kosmetyk> {
    return this.httpClient.delete(`${environment.apiUrl}/kosmetyki/${data.id}`).pipe(
      map((kosmetykAttrs) => new Kosmetyk(kosmetykAttrs))
    );
  }
}
