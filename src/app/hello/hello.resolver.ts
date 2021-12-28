import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloResolver implements Resolve<Observable<{ id: number; name: string }>> {
  // здесь можно заинжектить сервис для получения данных
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ id: number; name: string }> {
    // здесь можно вернуть обращение к сервису за данными
    return of({ id: route.params.id, name: 'John' });
  }
}
