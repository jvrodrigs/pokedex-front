import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  constructor(
    private httpClient: HttpClient
  ) { }

  get listAllPokemons(): Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((getPokemons: any) => {
          this.getInfosPokemons(getPokemons.url).subscribe(
            res => getPokemons.infos = res
          );
        })
      })
    )
  }

  public getInfosPokemons(url: string): Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
